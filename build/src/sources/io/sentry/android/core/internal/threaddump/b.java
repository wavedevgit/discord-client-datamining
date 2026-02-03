package io.sentry.android.core.internal.threaddump;

import java.io.BufferedReader;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f28565a;

    /* renamed from: b  reason: collision with root package name */
    private final int f28566b = 0;

    /* renamed from: c  reason: collision with root package name */
    private final int f28567c;

    /* renamed from: d  reason: collision with root package name */
    public int f28568d;

    public b(ArrayList arrayList) {
        this.f28565a = arrayList;
        this.f28567c = arrayList.size();
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
        if (this.f28568d < this.f28567c) {
            return true;
        }
        return false;
    }

    public a b() {
        int i10 = this.f28568d;
        if (i10 >= this.f28566b && i10 < this.f28567c) {
            ArrayList arrayList = this.f28565a;
            this.f28568d = i10 + 1;
            return (a) arrayList.get(i10);
        }
        return null;
    }

    public void d() {
        this.f28568d--;
    }
}
