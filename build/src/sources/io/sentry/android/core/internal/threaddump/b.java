package io.sentry.android.core.internal.threaddump;

import java.io.BufferedReader;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f27128a;

    /* renamed from: b  reason: collision with root package name */
    private final int f27129b = 0;

    /* renamed from: c  reason: collision with root package name */
    private final int f27130c;

    /* renamed from: d  reason: collision with root package name */
    public int f27131d;

    public b(ArrayList arrayList) {
        this.f27128a = arrayList;
        this.f27130c = arrayList.size();
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
        if (this.f27131d < this.f27130c) {
            return true;
        }
        return false;
    }

    public a b() {
        int i10 = this.f27131d;
        if (i10 >= this.f27129b && i10 < this.f27130c) {
            ArrayList arrayList = this.f27128a;
            this.f27131d = i10 + 1;
            return (a) arrayList.get(i10);
        }
        return null;
    }

    public void d() {
        this.f27131d--;
    }
}
