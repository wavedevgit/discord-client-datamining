package net.time4j.calendar.service;

import bu.p;
import bu.x;
import java.io.InvalidObjectException;
import net.time4j.calendar.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d extends cu.d implements q {
    private final Class<bu.q> chrono;

    /* renamed from: e  reason: collision with root package name */
    private final transient char f37412e;

    /* renamed from: i  reason: collision with root package name */
    private final transient boolean f37413i;

    public d(String str, Class cls, char c10, boolean z10) {
        super(str);
        this.chrono = cls;
        this.f37412e = c10;
        this.f37413i = z10;
    }

    @Override // bu.p
    public boolean A() {
        return true;
    }

    @Override // bu.p
    public boolean C() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public Class F() {
        return this.chrono;
    }

    @Override // bu.e, bu.p
    public char d() {
        return this.f37412e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // bu.e
    public boolean j(bu.e eVar) {
        if (this.chrono == ((d) eVar).chrono) {
            return true;
        }
        return false;
    }

    protected Object readResolve() {
        String name = name();
        for (p pVar : x.G(this.chrono).z()) {
            if (pVar.name().equals(name)) {
                return pVar;
            }
        }
        throw new InvalidObjectException(name);
    }
}
