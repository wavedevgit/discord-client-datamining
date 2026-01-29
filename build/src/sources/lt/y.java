package lt;

import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements h {

    /* renamed from: d  reason: collision with root package name */
    private final int f37721d;

    /* renamed from: e  reason: collision with root package name */
    private final jt.n f37722e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(jt.n nVar, int i10) {
        if (nVar != null) {
            if (i10 >= 1) {
                this.f37722e = nVar;
                this.f37721d = i10;
                return;
            }
            throw new IllegalArgumentException("Must be positive: " + i10);
        }
        throw new NullPointerException("Missing condition for unparseable chars.");
    }

    @Override // lt.h
    public int d(jt.o oVar, Appendable appendable, jt.d dVar, Set set, boolean z10) {
        return 0;
    }

    @Override // lt.h
    public void e(CharSequence charSequence, s sVar, jt.d dVar, t tVar, boolean z10) {
        int i10;
        int i11;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (this.f37722e == null) {
            i10 = length - this.f37721d;
        } else {
            int i12 = f10;
            for (int i13 = 0; i13 < this.f37721d && (i11 = i13 + f10) < length && this.f37722e.test(Character.valueOf(charSequence.charAt(i11))); i13++) {
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
            if (this.f37721d == yVar.f37721d) {
                jt.n nVar = this.f37722e;
                jt.n nVar2 = yVar.f37722e;
                if (nVar != null ? nVar.equals(nVar2) : nVar2 == null) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // lt.h
    public boolean f() {
        return false;
    }

    @Override // lt.h
    public jt.p getElement() {
        return null;
    }

    public int hashCode() {
        jt.n nVar = this.f37722e;
        if (nVar == null) {
            return this.f37721d;
        }
        return nVar.hashCode() ^ (~this.f37721d);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(y.class.getName());
        if (this.f37722e == null) {
            sb2.append("[keepRemainingChars=");
            sb2.append(this.f37721d);
        } else {
            sb2.append("[condition=");
            sb2.append(this.f37722e);
            sb2.append(", maxIterations=");
            sb2.append(this.f37721d);
        }
        sb2.append(']');
        return sb2.toString();
    }

    @Override // lt.h
    public h g(jt.p pVar) {
        return this;
    }

    @Override // lt.h
    public h a(c cVar, jt.d dVar, int i10) {
        return this;
    }
}
