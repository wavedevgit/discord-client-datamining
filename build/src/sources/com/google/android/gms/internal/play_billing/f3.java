package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f3 implements s2 {

    /* renamed from: a  reason: collision with root package name */
    private final v2 f15227a;

    /* renamed from: b  reason: collision with root package name */
    private final String f15228b;

    /* renamed from: c  reason: collision with root package name */
    private final Object[] f15229c;

    /* renamed from: d  reason: collision with root package name */
    private final int f15230d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f3(v2 v2Var, String str, Object[] objArr) {
        this.f15227a = v2Var;
        this.f15228b = str;
        this.f15229c = objArr;
        char charAt = str.charAt(0);
        if (charAt < 55296) {
            this.f15230d = charAt;
            return;
        }
        int i10 = charAt & 8191;
        int i11 = 1;
        int i12 = 13;
        while (true) {
            int i13 = i11 + 1;
            char charAt2 = str.charAt(i11);
            if (charAt2 >= 55296) {
                i10 |= (charAt2 & 8191) << i12;
                i12 += 13;
                i11 = i13;
            } else {
                this.f15230d = i10 | (charAt2 << i12);
                return;
            }
        }
    }

    @Override // com.google.android.gms.internal.play_billing.s2
    public final int a() {
        int i10 = this.f15230d;
        if ((i10 & 1) != 0) {
            return 1;
        }
        return (i10 & 4) == 4 ? 3 : 2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final String b() {
        return this.f15228b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final Object[] c() {
        return this.f15229c;
    }

    @Override // com.google.android.gms.internal.play_billing.s2
    public final v2 zza() {
        return this.f15227a;
    }

    @Override // com.google.android.gms.internal.play_billing.s2
    public final boolean zzb() {
        return (this.f15230d & 2) == 2;
    }
}
