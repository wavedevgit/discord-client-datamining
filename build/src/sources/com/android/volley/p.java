package com.android.volley;

import com.android.volley.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p {

    /* renamed from: a  reason: collision with root package name */
    public final Object f8199a;

    /* renamed from: b  reason: collision with root package name */
    public final b.a f8200b;

    /* renamed from: c  reason: collision with root package name */
    public final u f8201c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f8202d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(u uVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        void a(Object obj);
    }

    private p(Object obj, b.a aVar) {
        this.f8202d = false;
        this.f8199a = obj;
        this.f8200b = aVar;
        this.f8201c = null;
    }

    public static p a(u uVar) {
        return new p(uVar);
    }

    public static p c(Object obj, b.a aVar) {
        return new p(obj, aVar);
    }

    public boolean b() {
        if (this.f8201c == null) {
            return true;
        }
        return false;
    }

    private p(u uVar) {
        this.f8202d = false;
        this.f8199a = null;
        this.f8200b = null;
        this.f8201c = uVar;
    }
}
