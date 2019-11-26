<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Lead;

class LeadsController extends Controller
{
    public function index(Request $request)
    {
        $success = true;
        try {
            Lead::create($request->all());
        }
        catch(\Exception $e) {
            $success = false;
        }
        $data['success'] = $success;
        return $data;
    }
}
