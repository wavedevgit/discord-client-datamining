package wk;

import java.util.Formatter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class g {

    /* renamed from: a  reason: collision with root package name */
    private final c f53148a;

    /* renamed from: b  reason: collision with root package name */
    private final d[] f53149b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(c cVar) {
        this.f53148a = new c(cVar);
        this.f53149b = new d[(cVar.e() - cVar.g()) + 1];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final c a() {
        return this.f53148a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final d b(int i10) {
        return this.f53149b[e(i10)];
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final d c(int i10) {
        d dVar;
        d dVar2;
        d b10 = b(i10);
        if (b10 != null) {
            return b10;
        }
        for (int i11 = 1; i11 < 5; i11++) {
            int e10 = e(i10) - i11;
            if (e10 >= 0 && (dVar2 = this.f53149b[e10]) != null) {
                return dVar2;
            }
            int e11 = e(i10) + i11;
            d[] dVarArr = this.f53149b;
            if (e11 < dVarArr.length && (dVar = dVarArr[e11]) != null) {
                return dVar;
            }
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final d[] d() {
        return this.f53149b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int e(int i10) {
        return i10 - this.f53148a.g();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void f(int i10, d dVar) {
        this.f53149b[e(i10)] = dVar;
    }

    public String toString() {
        d[] dVarArr;
        Formatter formatter = new Formatter();
        try {
            int i10 = 0;
            for (d dVar : this.f53149b) {
                if (dVar == null) {
                    formatter.format("%3d:    |   %n", Integer.valueOf(i10));
                    i10++;
                } else {
                    formatter.format("%3d: %3d|%3d%n", Integer.valueOf(i10), Integer.valueOf(dVar.c()), Integer.valueOf(dVar.e()));
                    i10++;
                }
            }
            String formatter2 = formatter.toString();
            formatter.close();
            return formatter2;
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                try {
                    formatter.close();
                } catch (Throwable th4) {
                    th2.addSuppressed(th4);
                }
                throw th3;
            }
        }
    }
}
