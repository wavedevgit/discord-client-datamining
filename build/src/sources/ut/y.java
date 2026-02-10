package ut;

import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements h {

    /* renamed from: d  reason: collision with root package name */
    private final int f52057d;

    /* renamed from: e  reason: collision with root package name */
    private final st.n f52058e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(st.n nVar, int i10) {
        if (nVar != null) {
            if (i10 >= 1) {
                this.f52058e = nVar;
                this.f52057d = i10;
                return;
            }
            throw new IllegalArgumentException("Must be positive: " + i10);
        }
        throw new NullPointerException("Missing condition for unparseable chars.");
    }

    @Override // ut.h
    public void a(CharSequence charSequence, s sVar, st.d dVar, t tVar, boolean z10) {
        int i10;
        int i11;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (this.f52058e == null) {
            i10 = length - this.f52057d;
        } else {
            int i12 = f10;
            for (int i13 = 0; i13 < this.f52057d && (i11 = i13 + f10) < length && this.f52058e.test(Character.valueOf(charSequence.charAt(i11))); i13++) {
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
            if (this.f52057d == yVar.f52057d) {
                st.n nVar = this.f52058e;
                st.n nVar2 = yVar.f52058e;
                if (nVar != null ? nVar.equals(nVar2) : nVar2 == null) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // ut.h
    public int f(st.o oVar, Appendable appendable, st.d dVar, Set set, boolean z10) {
        return 0;
    }

    @Override // ut.h
    public boolean g() {
        return false;
    }

    @Override // ut.h
    public st.p getElement() {
        return null;
    }

    public int hashCode() {
        st.n nVar = this.f52058e;
        if (nVar == null) {
            return this.f52057d;
        }
        return nVar.hashCode() ^ (~this.f52057d);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(y.class.getName());
        if (this.f52058e == null) {
            sb2.append("[keepRemainingChars=");
            sb2.append(this.f52057d);
        } else {
            sb2.append("[condition=");
            sb2.append(this.f52058e);
            sb2.append(", maxIterations=");
            sb2.append(this.f52057d);
        }
        sb2.append(']');
        return sb2.toString();
    }

    @Override // ut.h
    public h e(st.p pVar) {
        return this;
    }

    @Override // ut.h
    public h d(c cVar, st.d dVar, int i10) {
        return this;
    }
}
