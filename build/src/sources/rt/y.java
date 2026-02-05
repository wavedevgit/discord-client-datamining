package rt;

import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y implements h {

    /* renamed from: d  reason: collision with root package name */
    private final int f49241d;

    /* renamed from: e  reason: collision with root package name */
    private final pt.n f49242e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(pt.n nVar, int i10) {
        if (nVar != null) {
            if (i10 >= 1) {
                this.f49242e = nVar;
                this.f49241d = i10;
                return;
            }
            throw new IllegalArgumentException("Must be positive: " + i10);
        }
        throw new NullPointerException("Missing condition for unparseable chars.");
    }

    @Override // rt.h
    public void d(CharSequence charSequence, s sVar, pt.d dVar, t tVar, boolean z10) {
        int i10;
        int i11;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (this.f49242e == null) {
            i10 = length - this.f49241d;
        } else {
            int i12 = f10;
            for (int i13 = 0; i13 < this.f49241d && (i11 = i13 + f10) < length && this.f49242e.test(Character.valueOf(charSequence.charAt(i11))); i13++) {
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
            if (this.f49241d == yVar.f49241d) {
                pt.n nVar = this.f49242e;
                pt.n nVar2 = yVar.f49242e;
                if (nVar != null ? nVar.equals(nVar2) : nVar2 == null) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override // rt.h
    public int f(pt.o oVar, Appendable appendable, pt.d dVar, Set set, boolean z10) {
        return 0;
    }

    @Override // rt.h
    public boolean g() {
        return false;
    }

    @Override // rt.h
    public pt.p getElement() {
        return null;
    }

    public int hashCode() {
        pt.n nVar = this.f49242e;
        if (nVar == null) {
            return this.f49241d;
        }
        return nVar.hashCode() ^ (~this.f49241d);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(y.class.getName());
        if (this.f49242e == null) {
            sb2.append("[keepRemainingChars=");
            sb2.append(this.f49241d);
        } else {
            sb2.append("[condition=");
            sb2.append(this.f49242e);
            sb2.append(", maxIterations=");
            sb2.append(this.f49241d);
        }
        sb2.append(']');
        return sb2.toString();
    }

    @Override // rt.h
    public h a(pt.p pVar) {
        return this;
    }

    @Override // rt.h
    public h e(c cVar, pt.d dVar, int i10) {
        return this;
    }
}
