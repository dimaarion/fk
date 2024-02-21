<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index(){
      return  Inertia::render('Dashboard', []);
    }

    public function menu(){
        $menu = Menu::all();
        return  Inertia::render('Menu', ['menu'=>$menu]);
    }

    private function params($menu,$request){
        $menu->name = empty($request->name)?"":$request->name;
        $menu->alias = empty($request->alias)?"":$request->alias;
        $menu->title = empty($request->title)?"":$request->title;
        $menu->keyword = empty($request->keyword)?"":$request->keyword;
        $menu->description = empty($request->description)?"":$request->description;
        $menu->sort = empty($request->sort)?"500":$request->sort;
        $menu->parent_id = empty($request->parent_id)?"0":$request->parent_id;
    }

    public function menuUpdate(Request $request){
        if($request->btn == "add" && !empty($request->name) && !empty($request->alias)){
            $menu = new Menu();
            $this->params($menu,$request);
            $menu->save();
        }

        if($request->btn == "update" && !empty($request->name) && !empty($request->alias)){
            $menu = Menu::find($request->id);
            $this->params($menu,$request);
            $menu->save();
        }

        if($request->btn == "delete"){
            $menu = Menu::find($request->id);
            $menu->delete();
        }
    }

}
