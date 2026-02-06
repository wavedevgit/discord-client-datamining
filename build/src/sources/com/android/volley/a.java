package com.android.volley;

import android.content.Intent;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a extends u {

    /* renamed from: i  reason: collision with root package name */
    private Intent f8038i;

    public a(k kVar) {
        super(kVar);
    }

    @Override // java.lang.Throwable
    public String getMessage() {
        if (this.f8038i != null) {
            return "User needs to (re)enter credentials.";
        }
        return super.getMessage();
    }
}
