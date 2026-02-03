package mt;

import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements h {

    /* renamed from: d  reason: collision with root package name */
    private final int f39437d;

    /* renamed from: e  reason: collision with root package name */
    private final kt.n f39438e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(kt.n nVar, int i10) {
        if (nVar != null) {
            if (i10 >= 1) {
                this.f39438e = nVar;
                this.f39437d = i10;
                return;
            }
            throw new IllegalArgumentException("Must be positive: " + i10);
        }
        throw new NullPointerException("Missing condition for unparseable chars.");
    }

    @Override // mt.h
    public int d(kt.o oVar, Appendable appendable, kt.d dVar, Set set, boolean z10) {
        return 0;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof y) {
            y yVar = (y) obj;
            if (this.f39437d == yVar.f39437d) {
                kt.n nVar = this.f39438e;
                kt.n nVar2 = yVar.f39438e;
                if (nVar != null ? nVar.equals(nVar2) : nVar2 == null) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // mt.h
    public void f(CharSequence charSequence, s sVar, kt.d dVar, t tVar, boolean z10) {
        int i10;
        int i11;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (this.f39438e == null) {
            i10 = length - this.f39437d;
        } else {
            int i12 = f10;
            for (int i13 = 0; i13 < this.f39437d && (i11 = i13 + f10) < length && this.f39438e.test(Character.valueOf(charSequence.charAt(i11))); i13++) {
                i12++;
            }
            i10 = i12;
        }
        int min = Math.min(Math.max(i10, 0), length);
        if (min > f10) {
            sVar.l(min);
        }
    }

    @Override // mt.h
    public boolean g() {
        return false;
    }

    @Override // mt.h
    public kt.p getElement() {
        return null;
    }

    public int hashCode() {
        kt.n nVar = this.f39438e;
        if (nVar == null) {
            return this.f39437d;
        }
        return nVar.hashCode() ^ (~this.f39437d);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(y.class.getName());
        if (this.f39438e == null) {
            sb2.append("[keepRemainingChars=");
            sb2.append(this.f39437d);
        } else {
            sb2.append("[condition=");
            sb2.append(this.f39438e);
            sb2.append(", maxIterations=");
            sb2.append(this.f39437d);
        }
        sb2.append(']');
        return sb2.toString();
    }

    @Override // mt.h
    public h a(kt.p pVar) {
        return this;
    }

    @Override // mt.h
    public h e(c cVar, kt.d dVar, int i10) {
        return this;
    }
}
