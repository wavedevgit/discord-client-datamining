package c6;

import android.os.SystemClock;
import androidx.recyclerview.widget.RecyclerView;
import com.android.volley.n;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b implements com.android.volley.h {

    /* renamed from: a  reason: collision with root package name */
    protected final g f7229a;

    /* renamed from: b  reason: collision with root package name */
    private final a f7230b;

    /* renamed from: c  reason: collision with root package name */
    protected final c f7231c;

    public b(a aVar) {
        this(aVar, new c(RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT));
    }

    @Override // com.android.volley.h
    public com.android.volley.k a(n nVar) {
        IOException iOException;
        f fVar;
        byte[] bArr;
        n nVar2;
        byte[] bArr2;
        long elapsedRealtime = SystemClock.elapsedRealtime();
        while (true) {
            try {
                f a10 = this.f7230b.a(nVar, e.c(nVar.getCacheEntry()));
                try {
                    int d10 = a10.d();
                    List c10 = a10.c();
                    if (d10 == 304) {
                        return i.b(nVar, SystemClock.elapsedRealtime() - elapsedRealtime, c10);
                    }
                    InputStream a11 = a10.a();
                    if (a11 != null) {
                        bArr2 = i.c(a11, a10.b(), this.f7231c);
                    } else {
                        bArr2 = new byte[0];
                    }
                    byte[] bArr3 = bArr2;
                    try {
                        i.d(SystemClock.elapsedRealtime() - elapsedRealtime, nVar, bArr3, d10);
                        if (d10 >= 200 && d10 <= 299) {
                            return new com.android.volley.k(d10, bArr3, false, SystemClock.elapsedRealtime() - elapsedRealtime, c10);
                        }
                        throw new IOException();
                    } catch (IOException e10) {
                        e = e10;
                        nVar2 = nVar;
                        fVar = a10;
                        bArr = bArr3;
                        iOException = e;
                        i.a(nVar2, i.e(nVar2, iOException, elapsedRealtime, fVar, bArr));
                        nVar = nVar2;
                    }
                } catch (IOException e11) {
                    e = e11;
                    bArr = null;
                    fVar = a10;
                    nVar2 = nVar;
                }
            } catch (IOException e12) {
                iOException = e12;
                fVar = null;
                bArr = null;
                nVar2 = nVar;
            }
            i.a(nVar2, i.e(nVar2, iOException, elapsedRealtime, fVar, bArr));
            nVar = nVar2;
        }
    }

    public b(a aVar, c cVar) {
        this.f7230b = aVar;
        this.f7229a = aVar;
        this.f7231c = cVar;
    }
}
