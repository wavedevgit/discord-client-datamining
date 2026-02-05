package net.time4j.calendar.service;

import java.io.InvalidObjectException;
import net.time4j.calendar.q;
import pt.p;
import pt.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d extends qt.d implements q {
    private final Class<pt.q> chrono;

    /* renamed from: e  reason: collision with root package name */
    private final transient char f39913e;

    /* renamed from: i  reason: collision with root package name */
    private final transient boolean f39914i;

    public d(String str, Class cls, char c10, boolean z10) {
        super(str);
        this.chrono = cls;
        this.f39913e = c10;
        this.f39914i = z10;
    }

    @Override // pt.p
    public boolean B() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public Class F() {
        return this.chrono;
    }

    @Override // pt.e, pt.p
    public char d() {
        return this.f39913e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // pt.e
    public boolean j(pt.e eVar) {
        if (this.chrono == ((d) eVar).chrono) {
            return true;
        }
        return false;
    }

    protected Object readResolve() {
        String name = name();
        for (p pVar : x.G(this.chrono).C()) {
            if (pVar.name().equals(name)) {
                return pVar;
            }
        }
        throw new InvalidObjectException(name);
    }

    @Override // pt.p
    public boolean z() {
        return true;
    }
}
