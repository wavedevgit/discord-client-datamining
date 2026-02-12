package vd;

import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    public final String f51503a;

    /* renamed from: b  reason: collision with root package name */
    public final long f51504b;

    /* renamed from: c  reason: collision with root package name */
    public final List f51505c;

    /* renamed from: d  reason: collision with root package name */
    public final List f51506d;

    /* renamed from: e  reason: collision with root package name */
    public final e f51507e;

    public g(String str, long j10, List list, List list2) {
        this(str, j10, list, list2, null);
    }

    public int a(int i10) {
        int size = this.f51505c.size();
        for (int i11 = 0; i11 < size; i11++) {
            if (((a) this.f51505c.get(i11)).f51459b == i10) {
                return i11;
            }
        }
        return -1;
    }

    public g(String str, long j10, List list, List list2, e eVar) {
        this.f51503a = str;
        this.f51504b = j10;
        this.f51505c = Collections.unmodifiableList(list);
        this.f51506d = Collections.unmodifiableList(list2);
        this.f51507e = eVar;
    }
}
