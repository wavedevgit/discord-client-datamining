package i8;

import android.net.Uri;
import com.facebook.cache.common.CacheKey;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h implements CacheKey {

    /* renamed from: a  reason: collision with root package name */
    final String f27276a;

    /* renamed from: b  reason: collision with root package name */
    final boolean f27277b;

    public h(String str) {
        this(str, false);
    }

    @Override // com.facebook.cache.common.CacheKey
    public String a() {
        return this.f27276a;
    }

    @Override // com.facebook.cache.common.CacheKey
    public boolean b(Uri uri) {
        return this.f27276a.contains(uri.toString());
    }

    @Override // com.facebook.cache.common.CacheKey
    public boolean c() {
        return this.f27277b;
    }

    @Override // com.facebook.cache.common.CacheKey
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof h) {
            return this.f27276a.equals(((h) obj).f27276a);
        }
        return false;
    }

    @Override // com.facebook.cache.common.CacheKey
    public int hashCode() {
        return this.f27276a.hashCode();
    }

    public String toString() {
        return this.f27276a;
    }

    public h(String str, boolean z10) {
        this.f27276a = (String) j.g(str);
        this.f27277b = z10;
    }
}
