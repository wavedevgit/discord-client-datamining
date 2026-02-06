package i8;

import android.net.Uri;
import com.facebook.cache.common.CacheKey;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h implements CacheKey {

    /* renamed from: a  reason: collision with root package name */
    final String f26613a;

    /* renamed from: b  reason: collision with root package name */
    final boolean f26614b;

    public h(String str) {
        this(str, false);
    }

    @Override // com.facebook.cache.common.CacheKey
    public String a() {
        return this.f26613a;
    }

    @Override // com.facebook.cache.common.CacheKey
    public boolean b(Uri uri) {
        return this.f26613a.contains(uri.toString());
    }

    @Override // com.facebook.cache.common.CacheKey
    public boolean c() {
        return this.f26614b;
    }

    @Override // com.facebook.cache.common.CacheKey
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof h) {
            return this.f26613a.equals(((h) obj).f26613a);
        }
        return false;
    }

    @Override // com.facebook.cache.common.CacheKey
    public int hashCode() {
        return this.f26613a.hashCode();
    }

    public String toString() {
        return this.f26613a;
    }

    public h(String str, boolean z10) {
        this.f26613a = (String) j.g(str);
        this.f26614b = z10;
    }
}
