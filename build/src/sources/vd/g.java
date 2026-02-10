package vd;

import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    public final String f51502a;

    /* renamed from: b  reason: collision with root package name */
    public final long f51503b;

    /* renamed from: c  reason: collision with root package name */
    public final List f51504c;

    /* renamed from: d  reason: collision with root package name */
    public final List f51505d;

    /* renamed from: e  reason: collision with root package name */
    public final e f51506e;

    public g(String str, long j10, List list, List list2) {
        this(str, j10, list, list2, null);
    }

    public int a(int i10) {
        int size = this.f51504c.size();
        for (int i11 = 0; i11 < size; i11++) {
            if (((a) this.f51504c.get(i11)).f51458b == i10) {
                return i11;
            }
        }
        return -1;
    }

    public g(String str, long j10, List list, List list2, e eVar) {
        this.f51502a = str;
        this.f51503b = j10;
        this.f51504c = Collections.unmodifiableList(list);
        this.f51505d = Collections.unmodifiableList(list2);
        this.f51506e = eVar;
    }
}
