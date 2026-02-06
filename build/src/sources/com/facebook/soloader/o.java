package com.facebook.soloader;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class o implements x {

    /* renamed from: a  reason: collision with root package name */
    private final x f11361a;

    public o(x xVar) {
        this.f11361a = xVar;
    }

    @Override // com.facebook.soloader.x
    public void a(String str, int i10) {
        ob.b.j(this.f11361a, "load", i10);
        try {
            this.f11361a.a(str, i10);
            ob.b.i(null);
        } finally {
        }
    }
}
