package com.google.android.gms.internal.fido;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.ArrayList;
import java.util.Arrays;
import kotlin.jvm.internal.ByteCompanionObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c5 extends l5 {

    /* renamed from: d  reason: collision with root package name */
    private final e1 f13578d;

    /* renamed from: e  reason: collision with root package name */
    private final int f13579e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c5(e1 e1Var) {
        e1Var.getClass();
        this.f13578d = e1Var;
        int i10 = 0;
        for (int i11 = 0; i11 < this.f13578d.size(); i11++) {
            int a10 = ((l5) this.f13578d.get(i11)).a();
            if (i10 < a10) {
                i10 = a10;
            }
        }
        int i12 = i10 + 1;
        this.f13579e = i12;
        if (i12 <= 8) {
            return;
        }
        throw new b5("Exceeded cutoff limit for max depth of cbor value");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.gms.internal.fido.l5
    public final int a() {
        return this.f13579e;
    }

    @Override // java.lang.Comparable
    public final /* bridge */ /* synthetic */ int compareTo(Object obj) {
        int size;
        int size2;
        l5 l5Var = (l5) obj;
        if (l5.e(ByteCompanionObject.MIN_VALUE) != l5Var.zza()) {
            size2 = l5Var.zza();
            size = l5.e(ByteCompanionObject.MIN_VALUE);
        } else {
            c5 c5Var = (c5) l5Var;
            if (this.f13578d.size() != c5Var.f13578d.size()) {
                size = this.f13578d.size();
                size2 = c5Var.f13578d.size();
            } else {
                for (int i10 = 0; i10 < this.f13578d.size(); i10++) {
                    int compareTo = ((l5) this.f13578d.get(i10)).compareTo((l5) c5Var.f13578d.get(i10));
                    if (compareTo != 0) {
                        return compareTo;
                    }
                }
                return 0;
            }
        }
        return size - size2;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || c5.class != obj.getClass()) {
            return false;
        }
        return this.f13578d.equals(((c5) obj).f13578d);
    }

    public final int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(l5.e(ByteCompanionObject.MIN_VALUE)), this.f13578d});
    }

    public final String toString() {
        if (this.f13578d.isEmpty()) {
            return "[]";
        }
        ArrayList arrayList = new ArrayList();
        e1 e1Var = this.f13578d;
        int size = e1Var.size();
        for (int i10 = 0; i10 < size; i10++) {
            arrayList.add(((l5) e1Var.get(i10)).toString().replace(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, "\n  "));
        }
        c0 a10 = c0.a(",\n  ");
        StringBuilder sb2 = new StringBuilder("[\n  ");
        a10.c(sb2, arrayList.iterator());
        sb2.append("\n]");
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.gms.internal.fido.l5
    public final int zza() {
        return l5.e(ByteCompanionObject.MIN_VALUE);
    }
}
