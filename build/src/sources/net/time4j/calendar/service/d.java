package net.time4j.calendar.service;

import java.io.InvalidObjectException;
import net.time4j.calendar.q;
import st.p;
import st.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d extends tt.d implements q {
    private final Class<st.q> chrono;

    /* renamed from: e  reason: collision with root package name */
    private final transient char f38408e;

    /* renamed from: i  reason: collision with root package name */
    private final transient boolean f38409i;

    public d(String str, Class cls, char c10, boolean z10) {
        super(str);
        this.chrono = cls;
        this.f38408e = c10;
        this.f38409i = z10;
    }

    @Override // st.p
    public boolean A() {
        return true;
    }

    @Override // st.p
    public boolean D() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public Class F() {
        return this.chrono;
    }

    @Override // st.e, st.p
    public char d() {
        return this.f38408e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // st.e
    public boolean j(st.e eVar) {
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
