package i8;

import android.net.Uri;
import com.facebook.cache.common.CacheKey;
import java.util.List;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements CacheKey {

    /* renamed from: a  reason: collision with root package name */
    final List f26658a;

    public e(List list) {
        this.f26658a = (List) j.g(list);
    }

    @Override // com.facebook.cache.common.CacheKey
    public String a() {
        return ((CacheKey) this.f26658a.get(0)).a();
    }

    @Override // com.facebook.cache.common.CacheKey
    public boolean b(Uri uri) {
        for (int i10 = 0; i10 < this.f26658a.size(); i10++) {
            if (((CacheKey) this.f26658a.get(i10)).b(uri)) {
                return true;
            }
        }
        return false;
    }

    @Override // com.facebook.cache.common.CacheKey
    public boolean c() {
        return false;
    }

    public List d() {
        return this.f26658a;
    }

    @Override // com.facebook.cache.common.CacheKey
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof e) {
            return this.f26658a.equals(((e) obj).f26658a);
        }
        return false;
    }

    @Override // com.facebook.cache.common.CacheKey
    public int hashCode() {
        return this.f26658a.hashCode();
    }

    public String toString() {
        return "MultiCacheKey:" + this.f26658a.toString();
    }
}
