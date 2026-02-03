package net.time4j.calendar.service;

import java.io.InvalidObjectException;
import mt.p;
import mt.x;
import net.time4j.calendar.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d extends nt.d implements q {
    private final Class<mt.q> chrono;

    /* renamed from: e  reason: collision with root package name */
    private final transient char f40453e;

    /* renamed from: i  reason: collision with root package name */
    private final transient boolean f40454i;

    public d(String str, Class cls, char c10, boolean z10) {
        super(str);
        this.chrono = cls;
        this.f40453e = c10;
        this.f40454i = z10;
    }

    @Override // mt.p
    public boolean C() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public Class F() {
        return this.chrono;
    }

    @Override // mt.e, mt.p
    public char d() {
        return this.f40453e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // mt.e
    public boolean m(mt.e eVar) {
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

    @Override // mt.p
    public boolean y() {
        return true;
    }
}
