package net.time4j.calendar.service;

import java.io.InvalidObjectException;
import kt.p;
import kt.x;
import net.time4j.calendar.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d extends lt.d implements q {
    private final Class<kt.q> chrono;

    /* renamed from: e  reason: collision with root package name */
    private final transient char f40414e;

    /* renamed from: i  reason: collision with root package name */
    private final transient boolean f40415i;

    public d(String str, Class cls, char c10, boolean z10) {
        super(str);
        this.chrono = cls;
        this.f40414e = c10;
        this.f40415i = z10;
    }

    @Override // kt.p
    public boolean C() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public Class F() {
        return this.chrono;
    }

    @Override // kt.e, kt.p
    public char d() {
        return this.f40414e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kt.e
    public boolean j(kt.e eVar) {
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

    @Override // kt.p
    public boolean y() {
        return true;
    }
}
