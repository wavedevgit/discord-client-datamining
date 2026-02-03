package ot;

import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements h {

    /* renamed from: d  reason: collision with root package name */
    private final int f44792d;

    /* renamed from: e  reason: collision with root package name */
    private final mt.n f44793e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(mt.n nVar, int i10) {
        if (nVar != null) {
            if (i10 >= 1) {
                this.f44793e = nVar;
                this.f44792d = i10;
                return;
            }
            throw new IllegalArgumentException("Must be positive: " + i10);
        }
        throw new NullPointerException("Missing condition for unparseable chars.");
    }

    @Override // ot.h
    public int a(mt.o oVar, Appendable appendable, mt.d dVar, Set set, boolean z10) {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof y) {
            y yVar = (y) obj;
            if (this.f44792d == yVar.f44792d) {
                mt.n nVar = this.f44793e;
                mt.n nVar2 = yVar.f44793e;
                if (nVar != null ? nVar.equals(nVar2) : nVar2 == null) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // ot.h
    public boolean f() {
        return false;
    }

    @Override // ot.h
    public void g(CharSequence charSequence, s sVar, mt.d dVar, t tVar, boolean z10) {
        int i10;
        int i11;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (this.f44793e == null) {
            i10 = length - this.f44792d;
        } else {
            int i12 = f10;
            for (int i13 = 0; i13 < this.f44792d && (i11 = i13 + f10) < length && this.f44793e.test(Character.valueOf(charSequence.charAt(i11))); i13++) {
                i12++;
            }
            i10 = i12;
        }
        int min = Math.min(Math.max(i10, 0), length);
        if (min > f10) {
            sVar.l(min);
        }
    }

    @Override // ot.h
    public mt.p getElement() {
        return null;
    }

    public int hashCode() {
        mt.n nVar = this.f44793e;
        if (nVar == null) {
            return this.f44792d;
        }
        return nVar.hashCode() ^ (~this.f44792d);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(y.class.getName());
        if (this.f44793e == null) {
            sb2.append("[keepRemainingChars=");
            sb2.append(this.f44792d);
        } else {
            sb2.append("[condition=");
            sb2.append(this.f44793e);
            sb2.append(", maxIterations=");
            sb2.append(this.f44792d);
        }
        sb2.append(']');
        return sb2.toString();
    }

    @Override // ot.h
    public h e(mt.p pVar) {
        return this;
    }

    @Override // ot.h
    public h d(c cVar, mt.d dVar, int i10) {
        return this;
    }
}
