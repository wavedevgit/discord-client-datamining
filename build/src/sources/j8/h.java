package j8;

import android.net.Uri;
import com.facebook.cache.common.CacheKey;
import p8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h implements CacheKey {

    /* renamed from: a  reason: collision with root package name */
    final String f30866a;

    /* renamed from: b  reason: collision with root package name */
    final boolean f30867b;

    public h(String str) {
        this(str, false);
    }

    @Override // com.facebook.cache.common.CacheKey
    public String a() {
        return this.f30866a;
    }

    @Override // com.facebook.cache.common.CacheKey
    public boolean b(Uri uri) {
        return this.f30866a.contains(uri.toString());
    }

    @Override // com.facebook.cache.common.CacheKey
    public boolean c() {
        return this.f30867b;
    }

    @Override // com.facebook.cache.common.CacheKey
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof h) {
            return this.f30866a.equals(((h) obj).f30866a);
        }
        return false;
    }

    @Override // com.facebook.cache.common.CacheKey
    public int hashCode() {
        return this.f30866a.hashCode();
    }

    public String toString() {
        return this.f30866a;
    }

    public h(String str, boolean z10) {
        this.f30866a = (String) j.g(str);
        this.f30867b = z10;
    }
}
