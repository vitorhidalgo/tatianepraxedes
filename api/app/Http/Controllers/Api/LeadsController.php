<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Lead;
use Illuminate\Support\Facades\Mail;
use App\Mail\MailLead;


class LeadsController extends Controller
{
    public function index(Request $request)
    {
        $success = true;
        try {
            $lead = Lead::create($request->all());
            Mail::to('vitor.hidalgo@gmail.com')->send(new MailLead($lead));
        }
        catch(\Exception $e) {
            $success = false;
            dd($e->getMessage());
        }
        $data['success'] = $success;
        return $data;
    }

    public function testMail()
    {
        $lead = Lead::find(1);
        return view('mail.lead', compact('lead'));
    }
}
