package net.time4j.calendar.service;

import java.io.InvalidObjectException;
import net.time4j.calendar.q;
import rt.p;
import rt.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d extends st.d implements q {
    private final Class<rt.q> chrono;

    /* renamed from: e  reason: collision with root package name */
    private final transient char f39316e;

    /* renamed from: i  reason: collision with root package name */
    private final transient boolean f39317i;

    public d(String str, Class cls, char c10, boolean z10) {
        super(str);
        this.chrono = cls;
        this.f39316e = c10;
        this.f39317i = z10;
    }

    @Override // rt.p
    public boolean A() {
        return true;
    }

    @Override // rt.p
    public boolean D() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public Class F() {
        return this.chrono;
    }

    @Override // rt.e, rt.p
    public char d() {
        return this.f39316e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // rt.e
    public boolean l(rt.e eVar) {
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
