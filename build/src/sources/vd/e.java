package vd;

import android.net.Uri;
import java.util.LinkedHashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e {

    /* renamed from: a  reason: collision with root package name */
    private final LinkedHashMap f52078a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends LinkedHashMap {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f52079d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(int i10, float f10, boolean z10, int i11) {
            super(i10, f10, z10);
            this.f52079d = i11;
        }

        @Override // java.util.LinkedHashMap
        protected boolean removeEldestEntry(Map.Entry entry) {
            if (size() > this.f52079d) {
                return true;
            }
            return false;
        }
    }

    public e(int i10) {
        this.f52078a = new a(i10 + 1, 1.0f, false, i10);
    }

    public byte[] a(Uri uri) {
        if (uri == null) {
            return null;
        }
        return (byte[]) this.f52078a.get(uri);
    }

    public byte[] b(Uri uri, byte[] bArr) {
        return (byte[]) this.f52078a.put((Uri) ne.a.e(uri), (byte[]) ne.a.e(bArr));
    }

    public byte[] c(Uri uri) {
        return (byte[]) this.f52078a.remove(ne.a.e(uri));
    }
}
