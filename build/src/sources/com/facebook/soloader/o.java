package com.facebook.soloader;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class o implements x {

    /* renamed from: a  reason: collision with root package name */
    private final x f12109a;

    public o(x xVar) {
        this.f12109a = xVar;
    }

    @Override // com.facebook.soloader.x
    public void a(String str, int i10) {
        ob.b.j(this.f12109a, "load", i10);
        try {
            this.f12109a.a(str, i10);
            ob.b.i(null);
        } finally {
        }
    }
}
