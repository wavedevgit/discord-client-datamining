package com.android.volley;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k {

    /* renamed from: a  reason: collision with root package name */
    public final int f7789a;

    /* renamed from: b  reason: collision with root package name */
    public final byte[] f7790b;

    /* renamed from: c  reason: collision with root package name */
    public final Map f7791c;

    /* renamed from: d  reason: collision with root package name */
    public final List f7792d;

    /* renamed from: e  reason: collision with root package name */
    public final boolean f7793e;

    /* renamed from: f  reason: collision with root package name */
    public final long f7794f;

    public k(int i10, byte[] bArr, Map map, boolean z10, long j10) {
        this(i10, bArr, map, a(map), z10, j10);
    }

    private static List a(Map map) {
        if (map == null) {
            return null;
        }
        if (map.isEmpty()) {
            return Collections.EMPTY_LIST;
        }
        ArrayList arrayList = new ArrayList(map.size());
        for (Map.Entry entry : map.entrySet()) {
            arrayList.add(new g((String) entry.getKey(), (String) entry.getValue()));
        }
        return arrayList;
    }

    private static Map b(List list) {
        if (list == null) {
            return null;
        }
        if (list.isEmpty()) {
            return Collections.EMPTY_MAP;
        }
        TreeMap treeMap = new TreeMap(String.CASE_INSENSITIVE_ORDER);
        Iterator it = list.iterator();
        while (it.hasNext()) {
            g gVar = (g) it.next();
            treeMap.put(gVar.a(), gVar.b());
        }
        return treeMap;
    }

    public k(int i10, byte[] bArr, boolean z10, long j10, List list) {
        this(i10, bArr, b(list), list, z10, j10);
    }

    public k(byte[] bArr, Map map) {
        this((int) androidx.recyclerview.widget.h.DEFAULT_DRAG_ANIMATION_DURATION, bArr, map, false, 0L);
    }

    private k(int i10, byte[] bArr, Map map, List list, boolean z10, long j10) {
        this.f7789a = i10;
        this.f7790b = bArr;
        this.f7791c = map;
        if (list == null) {
            this.f7792d = null;
        } else {
            this.f7792d = Collections.unmodifiableList(list);
        }
        this.f7793e = z10;
        this.f7794f = j10;
    }
}
