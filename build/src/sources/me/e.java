package me;

import android.net.Uri;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e {

    /* renamed from: a  reason: collision with root package name */
    private final Map f38035a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final List f38036b = new ArrayList();

    private e a(String str, Object obj) {
        this.f38035a.put((String) ne.a.e(str), ne.a.e(obj));
        this.f38036b.remove(str);
        return this;
    }

    public static e g(e eVar, long j10) {
        return eVar.e("exo_len", j10);
    }

    public static e h(e eVar, Uri uri) {
        if (uri == null) {
            return eVar.d("exo_redir");
        }
        return eVar.f("exo_redir", uri.toString());
    }

    public Map b() {
        HashMap hashMap = new HashMap(this.f38035a);
        for (Map.Entry entry : hashMap.entrySet()) {
            Object value = entry.getValue();
            if (value instanceof byte[]) {
                byte[] bArr = (byte[]) value;
                entry.setValue(Arrays.copyOf(bArr, bArr.length));
            }
        }
        return Collections.unmodifiableMap(hashMap);
    }

    public List c() {
        return Collections.unmodifiableList(new ArrayList(this.f38036b));
    }

    public e d(String str) {
        this.f38036b.add(str);
        this.f38035a.remove(str);
        return this;
    }

    public e e(String str, long j10) {
        return a(str, Long.valueOf(j10));
    }

    public e f(String str, String str2) {
        return a(str, str2);
    }
}
