package com.google.android.gms.internal.fido;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.io.IOException;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i5 extends l5 {

    /* renamed from: d  reason: collision with root package name */
    private final int f14023d;

    /* renamed from: e  reason: collision with root package name */
    private final l1 f14024e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i5(l1 l1Var) {
        l1Var.getClass();
        this.f14024e = l1Var;
        c2 e10 = l1Var.c().e();
        int i10 = 0;
        while (e10.hasNext()) {
            Map.Entry entry = (Map.Entry) e10.next();
            int a10 = ((l5) entry.getKey()).a();
            i10 = i10 < a10 ? a10 : i10;
            int a11 = ((l5) entry.getValue()).a();
            if (i10 < a11) {
                i10 = a11;
            }
        }
        int i11 = i10 + 1;
        this.f14023d = i11;
        if (i11 <= 8) {
            return;
        }
        throw new b5("Exceeded cutoff limit for max depth of cbor value");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.gms.internal.fido.l5
    public final int a() {
        return this.f14023d;
    }

    @Override // java.lang.Comparable
    public final /* bridge */ /* synthetic */ int compareTo(Object obj) {
        int compareTo;
        int size;
        int size2;
        l5 l5Var = (l5) obj;
        if (l5.e((byte) -96) != l5Var.zza()) {
            size2 = l5Var.zza();
            size = l5.e((byte) -96);
        } else {
            i5 i5Var = (i5) l5Var;
            if (this.f14024e.size() != i5Var.f14024e.size()) {
                size = this.f14024e.size();
                size2 = i5Var.f14024e.size();
            } else {
                c2 e10 = this.f14024e.c().e();
                c2 e11 = i5Var.f14024e.c().e();
                do {
                    if (!e10.hasNext() && !e11.hasNext()) {
                        return 0;
                    }
                    Map.Entry entry = (Map.Entry) e10.next();
                    Map.Entry entry2 = (Map.Entry) e11.next();
                    int compareTo2 = ((l5) entry.getKey()).compareTo((l5) entry2.getKey());
                    if (compareTo2 != 0) {
                        return compareTo2;
                    }
                    compareTo = ((l5) entry.getValue()).compareTo((l5) entry2.getValue());
                } while (compareTo == 0);
                return compareTo;
            }
        }
        return size - size2;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || i5.class != obj.getClass()) {
            return false;
        }
        return this.f14024e.equals(((i5) obj).f14024e);
    }

    public final int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(l5.e((byte) -96)), this.f14024e});
    }

    public final l1 n() {
        return this.f14024e;
    }

    public final String toString() {
        if (this.f14024e.isEmpty()) {
            return "{}";
        }
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        c2 e10 = this.f14024e.c().e();
        while (e10.hasNext()) {
            Map.Entry entry = (Map.Entry) e10.next();
            linkedHashMap.put(((l5) entry.getKey()).toString().replace(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, "\n  "), ((l5) entry.getValue()).toString().replace(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, "\n  "));
        }
        c0 a10 = c0.a(",\n  ");
        StringBuilder sb2 = new StringBuilder("{\n  ");
        try {
            a0.a(sb2, linkedHashMap.entrySet().iterator(), a10, " : ");
            sb2.append("\n}");
            return sb2.toString();
        } catch (IOException e11) {
            throw new AssertionError(e11);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.gms.internal.fido.l5
    public final int zza() {
        return l5.e((byte) -96);
    }
}
