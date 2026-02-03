package com.android.volley;

import com.android.volley.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p {

    /* renamed from: a  reason: collision with root package name */
    public final Object f7814a;

    /* renamed from: b  reason: collision with root package name */
    public final b.a f7815b;

    /* renamed from: c  reason: collision with root package name */
    public final u f7816c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f7817d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(u uVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        void a(Object obj);
    }

    private p(Object obj, b.a aVar) {
        this.f7817d = false;
        this.f7814a = obj;
        this.f7815b = aVar;
        this.f7816c = null;
    }

    public static p a(u uVar) {
        return new p(uVar);
    }

    public static p c(Object obj, b.a aVar) {
        return new p(obj, aVar);
    }

    public boolean b() {
        if (this.f7816c == null) {
            return true;
        }
        return false;
    }

    private p(u uVar) {
        this.f7817d = false;
        this.f7814a = null;
        this.f7815b = null;
        this.f7816c = uVar;
    }
}
