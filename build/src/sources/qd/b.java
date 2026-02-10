package qd;

import android.net.Uri;
import com.google.android.exoplayer2.upstream.k;
import java.io.InputStream;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements k.a {

    /* renamed from: a  reason: collision with root package name */
    private final k.a f45356a;

    /* renamed from: b  reason: collision with root package name */
    private final List f45357b;

    public b(k.a aVar, List list) {
        this.f45356a = aVar;
        this.f45357b = list;
    }

    @Override // com.google.android.exoplayer2.upstream.k.a
    /* renamed from: b */
    public a a(Uri uri, InputStream inputStream) {
        a aVar = (a) this.f45356a.a(uri, inputStream);
        List list = this.f45357b;
        if (list != null && !list.isEmpty()) {
            return (a) aVar.a(this.f45357b);
        }
        return aVar;
    }
}
