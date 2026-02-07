package me;

import java.nio.ByteBuffer;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f implements d {

    /* renamed from: c  reason: collision with root package name */
    public static final f f37122c = new f(Collections.EMPTY_MAP);

    /* renamed from: a  reason: collision with root package name */
    private int f37123a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f37124b;

    public f(Map map) {
        this.f37124b = Collections.unmodifiableMap(map);
    }

    private static void e(HashMap hashMap, Map map) {
        for (Map.Entry entry : map.entrySet()) {
            hashMap.put((String) entry.getKey(), i(entry.getValue()));
        }
    }

    private static Map f(Map map, e eVar) {
        HashMap hashMap = new HashMap(map);
        k(hashMap, eVar.c());
        e(hashMap, eVar.b());
        return hashMap;
    }

    private static byte[] i(Object obj) {
        if (obj instanceof Long) {
            return ByteBuffer.allocate(8).putLong(((Long) obj).longValue()).array();
        }
        if (obj instanceof String) {
            return ((String) obj).getBytes(mi.d.f37219c);
        }
        if (obj instanceof byte[]) {
            return (byte[]) obj;
        }
        throw new IllegalArgumentException();
    }

    private static boolean j(Map map, Map map2) {
        if (map.size() != map2.size()) {
            return false;
        }
        for (Map.Entry entry : map.entrySet()) {
            if (!Arrays.equals((byte[]) entry.getValue(), (byte[]) map2.get(entry.getKey()))) {
                return false;
            }
        }
        return true;
    }

    private static void k(HashMap hashMap, List list) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            hashMap.remove(list.get(i10));
        }
    }

    @Override // me.d
    public final long a(String str, long j10) {
        byte[] bArr = (byte[]) this.f37124b.get(str);
        if (bArr != null) {
            return ByteBuffer.wrap(bArr).getLong();
        }
        return j10;
    }

    @Override // me.d
    public final String b(String str, String str2) {
        byte[] bArr = (byte[]) this.f37124b.get(str);
        if (bArr != null) {
            return new String(bArr, mi.d.f37219c);
        }
        return str2;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && f.class == obj.getClass()) {
            return j(this.f37124b, ((f) obj).f37124b);
        }
        return false;
    }

    public f g(e eVar) {
        Map f10 = f(this.f37124b, eVar);
        if (j(this.f37124b, f10)) {
            return this;
        }
        return new f(f10);
    }

    public Set h() {
        return this.f37124b.entrySet();
    }

    public int hashCode() {
        if (this.f37123a == 0) {
            int i10 = 0;
            for (Map.Entry entry : this.f37124b.entrySet()) {
                i10 += Arrays.hashCode((byte[]) entry.getValue()) ^ ((String) entry.getKey()).hashCode();
            }
            this.f37123a = i10;
        }
        return this.f37123a;
    }
}
