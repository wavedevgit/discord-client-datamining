package io.sentry.android.core.internal.threaddump;

import java.io.BufferedReader;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f28999a;

    /* renamed from: b  reason: collision with root package name */
    private final int f29000b = 0;

    /* renamed from: c  reason: collision with root package name */
    private final int f29001c;

    /* renamed from: d  reason: collision with root package name */
    public int f29002d;

    public b(ArrayList arrayList) {
        this.f28999a = arrayList;
        this.f29001c = arrayList.size();
    }

    public static b c(BufferedReader bufferedReader) {
        ArrayList arrayList = new ArrayList();
        int i10 = 0;
        while (true) {
            String readLine = bufferedReader.readLine();
            if (readLine != null) {
                i10++;
                arrayList.add(new a(i10, readLine));
            } else {
                return new b(arrayList);
            }
        }
    }

    public boolean a() {
        if (this.f29002d < this.f29001c) {
            return true;
        }
        return false;
    }

    public a b() {
        int i10 = this.f29002d;
        if (i10 >= this.f29000b && i10 < this.f29001c) {
            ArrayList arrayList = this.f28999a;
            this.f29002d = i10 + 1;
            return (a) arrayList.get(i10);
        }
        return null;
    }

    public void d() {
        this.f29002d--;
    }
}
