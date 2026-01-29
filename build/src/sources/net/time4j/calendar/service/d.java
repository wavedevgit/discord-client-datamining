package net.time4j.calendar.service;

import java.io.InvalidObjectException;
import jt.p;
import jt.x;
import net.time4j.calendar.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d extends kt.d implements q {
    private final Class<jt.q> chrono;

    /* renamed from: e  reason: collision with root package name */
    private final transient char f40535e;

    /* renamed from: i  reason: collision with root package name */
    private final transient boolean f40536i;

    public d(String str, Class cls, char c10, boolean z10) {
        super(str);
        this.chrono = cls;
        this.f40535e = c10;
        this.f40536i = z10;
    }

    @Override // jt.p
    public boolean C() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public Class F() {
        return this.chrono;
    }

    @Override // jt.e, jt.p
    public char d() {
        return this.f40535e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // jt.e
    public boolean m(jt.e eVar) {
        if (this.chrono == ((d) eVar).chrono) {
            return true;
        }
        return false;
    }

    protected Object readResolve() {
        String name = name();
        for (p pVar : x.G(this.chrono).B()) {
            if (pVar.name().equals(name)) {
                return pVar;
            }
        }
        throw new InvalidObjectException(name);
    }

    @Override // jt.p
    public boolean y() {
        return true;
    }
}
