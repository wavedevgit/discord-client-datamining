package du;

import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements h {

    /* renamed from: d  reason: collision with root package name */
    private final int f22160d;

    /* renamed from: e  reason: collision with root package name */
    private final bu.n f22161e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(bu.n nVar, int i10) {
        if (nVar != null) {
            if (i10 >= 1) {
                this.f22161e = nVar;
                this.f22160d = i10;
                return;
            }
            throw new IllegalArgumentException("Must be positive: " + i10);
        }
        throw new NullPointerException("Missing condition for unparseable chars.");
    }

    @Override // du.h
    public void d(CharSequence charSequence, s sVar, bu.d dVar, t tVar, boolean z10) {
        int i10;
        int i11;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (this.f22161e == null) {
            i10 = length - this.f22160d;
        } else {
            int i12 = f10;
            for (int i13 = 0; i13 < this.f22160d && (i11 = i13 + f10) < length && this.f22161e.test(Character.valueOf(charSequence.charAt(i11))); i13++) {
                i12++;
            }
            i10 = i12;
        }
        int min = Math.min(Math.max(i10, 0), length);
        if (min > f10) {
            sVar.l(min);
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof y) {
            y yVar = (y) obj;
            if (this.f22160d == yVar.f22160d) {
                bu.n nVar = this.f22161e;
                bu.n nVar2 = yVar.f22161e;
                if (nVar != null ? nVar.equals(nVar2) : nVar2 == null) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // du.h
    public boolean f() {
        return false;
    }

    @Override // du.h
    public int g(bu.o oVar, Appendable appendable, bu.d dVar, Set set, boolean z10) {
        return 0;
    }

    @Override // du.h
    public bu.p getElement() {
        return null;
    }

    public int hashCode() {
        bu.n nVar = this.f22161e;
        if (nVar == null) {
            return this.f22160d;
        }
        return nVar.hashCode() ^ (~this.f22160d);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(y.class.getName());
        if (this.f22161e == null) {
            sb2.append("[keepRemainingChars=");
            sb2.append(this.f22160d);
        } else {
            sb2.append("[condition=");
            sb2.append(this.f22161e);
            sb2.append(", maxIterations=");
            sb2.append(this.f22160d);
        }
        sb2.append(']');
        return sb2.toString();
    }

    @Override // du.h
    public h e(bu.p pVar) {
        return this;
    }

    @Override // du.h
    public h a(c cVar, bu.d dVar, int i10) {
        return this;
    }
}
