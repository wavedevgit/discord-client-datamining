package com.android.volley;

import com.android.volley.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p {

    /* renamed from: a  reason: collision with root package name */
    public final Object f8098a;

    /* renamed from: b  reason: collision with root package name */
    public final b.a f8099b;

    /* renamed from: c  reason: collision with root package name */
    public final u f8100c;

    /* renamed from: d  reason: collision with root package name */
    public boolean f8101d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(u uVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        void a(Object obj);
    }

    private p(Object obj, b.a aVar) {
        this.f8101d = false;
        this.f8098a = obj;
        this.f8099b = aVar;
        this.f8100c = null;
    }

    public static p a(u uVar) {
        return new p(uVar);
    }

    public static p c(Object obj, b.a aVar) {
        return new p(obj, aVar);
    }

    public boolean b() {
        if (this.f8100c == null) {
            return true;
        }
        return false;
    }

    private p(u uVar) {
        this.f8101d = false;
        this.f8098a = null;
        this.f8099b = null;
        this.f8100c = uVar;
    }
}
