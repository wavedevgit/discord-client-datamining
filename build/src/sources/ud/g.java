package ud;

import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    public final String f50542a;

    /* renamed from: b  reason: collision with root package name */
    public final long f50543b;

    /* renamed from: c  reason: collision with root package name */
    public final List f50544c;

    /* renamed from: d  reason: collision with root package name */
    public final List f50545d;

    /* renamed from: e  reason: collision with root package name */
    public final e f50546e;

    public g(String str, long j10, List list, List list2) {
        this(str, j10, list, list2, null);
    }

    public int a(int i10) {
        int size = this.f50544c.size();
        for (int i11 = 0; i11 < size; i11++) {
            if (((a) this.f50544c.get(i11)).f50498b == i10) {
                return i11;
            }
        }
        return -1;
    }

    public g(String str, long j10, List list, List list2, e eVar) {
        this.f50542a = str;
        this.f50543b = j10;
        this.f50544c = Collections.unmodifiableList(list);
        this.f50545d = Collections.unmodifiableList(list2);
        this.f50546e = eVar;
    }
}
