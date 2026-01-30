package net.time4j.tz.model;

import java.io.Serializable;
import net.time4j.b0;
import net.time4j.f0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class g extends d implements Serializable {
    private static final long serialVersionUID = 1;

    /* renamed from: p  reason: collision with root package name */
    private final transient byte f40896p;

    /* JADX INFO: Access modifiers changed from: protected */
    public g(b0 b0Var, int i10, i iVar, int i11) {
        super(i10, iVar, i11);
        this.f40896p = (byte) b0Var.d();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // net.time4j.tz.model.d
    public String a() {
        return "iso8601";
    }

    @Override // net.time4j.tz.model.d
    public final f0 b(int i10) {
        return (f0) j(i10).K(c(), net.time4j.f.f40571s);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // net.time4j.tz.model.d
    public int h(long j10) {
        return gt.b.i(gt.b.l(j10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // net.time4j.tz.model.d
    public int i(gt.a aVar) {
        return aVar.f();
    }

    protected abstract f0 j(int i10);

    /* JADX INFO: Access modifiers changed from: package-private */
    public byte k() {
        return this.f40896p;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public boolean l(g gVar) {
        if (f().equals(gVar.f()) && c() == gVar.c() && d() == gVar.d() && e() == gVar.e() && this.f40896p == gVar.f40896p) {
            return true;
        }
        return false;
    }
}
