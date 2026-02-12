package com.android.volley;

import com.android.volley.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p {

    /* renamed from: a  reason: collision with root package name */
    public final Object f8816a;

    /* renamed from: b  reason: collision with root package name */
    public final b.a f8817b;

    /* renamed from: c  reason: collision with root package name */
    public final u f8818c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f8819d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(u uVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        void a(Object obj);
    }

    private p(Object obj, b.a aVar) {
        this.f8819d = false;
        this.f8816a = obj;
        this.f8817b = aVar;
        this.f8818c = null;
    }

    public static p a(u uVar) {
        return new p(uVar);
    }

    public static p c(Object obj, b.a aVar) {
        return new p(obj, aVar);
    }

    public boolean b() {
        if (this.f8818c == null) {
            return true;
        }
        return false;
    }

    private p(u uVar) {
        this.f8819d = false;
        this.f8816a = null;
        this.f8817b = null;
        this.f8818c = uVar;
    }
}
