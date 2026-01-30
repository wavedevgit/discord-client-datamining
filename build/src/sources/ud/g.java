package ud;

import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    public final String f50199a;

    /* renamed from: b  reason: collision with root package name */
    public final long f50200b;

    /* renamed from: c  reason: collision with root package name */
    public final List f50201c;

    /* renamed from: d  reason: collision with root package name */
    public final List f50202d;

    /* renamed from: e  reason: collision with root package name */
    public final e f50203e;

    public g(String str, long j10, List list, List list2) {
        this(str, j10, list, list2, null);
    }

    public int a(int i10) {
        int size = this.f50201c.size();
        for (int i11 = 0; i11 < size; i11++) {
            if (((a) this.f50201c.get(i11)).f50155b == i10) {
                return i11;
            }
        }
        return -1;
    }

    public g(String str, long j10, List list, List list2, e eVar) {
        this.f50199a = str;
        this.f50200b = j10;
        this.f50201c = Collections.unmodifiableList(list);
        this.f50202d = Collections.unmodifiableList(list2);
        this.f50203e = eVar;
    }
}
