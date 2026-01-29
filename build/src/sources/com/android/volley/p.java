package com.android.volley;

import com.android.volley.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p {

    /* renamed from: a  reason: collision with root package name */
    public final Object f9217a;

    /* renamed from: b  reason: collision with root package name */
    public final b.a f9218b;

    /* renamed from: c  reason: collision with root package name */
    public final u f9219c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f9220d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(u uVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        void a(Object obj);
    }

    private p(Object obj, b.a aVar) {
        this.f9220d = false;
        this.f9217a = obj;
        this.f9218b = aVar;
        this.f9219c = null;
    }

    public static p a(u uVar) {
        return new p(uVar);
    }

    public static p c(Object obj, b.a aVar) {
        return new p(obj, aVar);
    }

    public boolean b() {
        if (this.f9219c == null) {
            return true;
        }
        return false;
    }

    private p(u uVar) {
        this.f9220d = false;
        this.f9217a = null;
        this.f9218b = null;
        this.f9219c = uVar;
    }
}
