package com.henninghall.date_picker;

import android.util.Log;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final n f16602a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f16603a;

        static {
            int[] iArr = new int[dl.b.values().length];
            f16603a = iArr;
            try {
                iArr[dl.b.datetime.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f16603a[dl.b.time.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f16603a[dl.b.date.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(n nVar) {
        this.f16602a = nVar;
    }

    private ArrayList c() {
        String replaceAll = h.c(this.f16602a.u()).replaceAll("\\('(.+?)'\\)", "\\${$1}").replaceAll("'.+?'", "").replaceAll("\\$\\{(.+?)\\}", "('$1')");
        ArrayList arrayList = new ArrayList(Arrays.asList(dl.c.values()));
        ArrayList arrayList2 = new ArrayList();
        dl.c cVar = dl.c.DAY;
        arrayList.remove(cVar);
        arrayList2.add(cVar);
        for (char c10 : replaceAll.toCharArray()) {
            try {
                dl.c h10 = o.h(c10);
                if (arrayList.contains(h10)) {
                    arrayList.remove(h10);
                    arrayList2.add(h10);
                }
            } catch (Exception unused) {
            }
        }
        dl.c cVar2 = dl.c.AM_PM;
        if (arrayList.contains(cVar2)) {
            arrayList.remove(cVar2);
            arrayList2.add(cVar2);
        }
        if (!arrayList.isEmpty()) {
            Log.e(NativeRNDatePickerSpec.NAME, arrayList.size() + " wheel types cannot be ordered. Wheel type 0: " + arrayList.get(0));
        }
        return arrayList2;
    }

    public String a() {
        Calendar t10 = this.f16602a.t();
        String s10 = this.f16602a.s();
        if (t10 != null) {
            return o.b(t10);
        }
        return s10;
    }

    public ArrayList b() {
        ArrayList c10 = c();
        ArrayList e10 = e();
        ArrayList arrayList = new ArrayList();
        Iterator it = c10.iterator();
        while (it.hasNext()) {
            dl.c cVar = (dl.c) it.next();
            if (e10.contains(cVar)) {
                arrayList.add(cVar);
            }
        }
        return arrayList;
    }

    public int d() {
        return l.f16690a;
    }

    public ArrayList e() {
        ArrayList arrayList = new ArrayList();
        dl.b z10 = this.f16602a.z();
        int i10 = a.f16603a[z10.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    arrayList.add(dl.c.YEAR);
                    arrayList.add(dl.c.MONTH);
                    arrayList.add(dl.c.DATE);
                }
            } else {
                arrayList.add(dl.c.HOUR);
                arrayList.add(dl.c.MINUTE);
            }
        } else {
            arrayList.add(dl.c.DAY);
            arrayList.add(dl.c.HOUR);
            arrayList.add(dl.c.MINUTE);
        }
        if ((z10 == dl.b.time || z10 == dl.b.datetime) && this.f16602a.f16717o.g()) {
            arrayList.add(dl.c.AM_PM);
        }
        return arrayList;
    }

    public boolean f() {
        if (this.f16602a.z() == dl.b.time && !g()) {
            return true;
        }
        return false;
    }

    public boolean g() {
        if (this.f16602a.r() == dl.a.locale) {
            return h.h(this.f16602a.u());
        }
        return o.c();
    }
}
