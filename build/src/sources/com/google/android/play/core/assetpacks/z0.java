package com.google.android.play.core.assetpacks;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.Parcelable;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class z0 implements y0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f16095a;

    /* renamed from: b  reason: collision with root package name */
    private final androidx.work.b f16096b;

    /* renamed from: c  reason: collision with root package name */
    private final Bundle f16097c = new Bundle();

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ z0(String str, androidx.work.b bVar, wh.b bVar2) {
        this.f16095a = str;
        this.f16096b = bVar;
    }

    @Override // com.google.android.play.core.assetpacks.y0
    public final void a(String str) {
        this.f16097c.putString(str, this.f16096b.l(this.f16095a.concat(str)));
    }

    @Override // com.google.android.play.core.assetpacks.y0
    public final /* synthetic */ void b(String str) {
        x0.a(this, str);
    }

    @Override // com.google.android.play.core.assetpacks.y0
    public final void c(String str) {
        Intent data;
        String[] m10 = this.f16096b.m(this.f16095a + str + ":intent_data");
        if (m10 == null) {
            return;
        }
        ArrayList<? extends Parcelable> arrayList = new ArrayList<>(m10.length);
        for (String str2 : m10) {
            if (str2.isEmpty()) {
                data = null;
            } else {
                data = new Intent().setData(Uri.parse(str2));
            }
            arrayList.add(data);
        }
        this.f16097c.putParcelableArrayList(str, arrayList);
    }

    @Override // com.google.android.play.core.assetpacks.y0
    public final void d(String str, long j10) {
        this.f16097c.putLong(str, this.f16096b.k(this.f16095a.concat(str), j10));
    }

    @Override // com.google.android.play.core.assetpacks.y0
    public final void e(String str) {
        this.f16097c.putInt(str, this.f16096b.i(this.f16095a.concat(str), 0));
    }

    @Override // com.google.android.play.core.assetpacks.y0
    public final void f(String str) {
        this.f16097c.putBoolean("notification_intent_reconstruct_from_data", this.f16096b.h(this.f16095a.concat("notification_intent_reconstruct_from_data"), false));
    }

    @Override // com.google.android.play.core.assetpacks.y0
    public final List g(String str) {
        String[] m10 = this.f16096b.m(this.f16095a.concat(str));
        if (m10 == null) {
            return new ArrayList();
        }
        ArrayList<String> arrayList = new ArrayList<>(m10.length);
        for (String str2 : m10) {
            if (true == str2.isEmpty()) {
                str2 = null;
            }
            arrayList.add(str2);
        }
        this.f16097c.putStringArrayList(str, arrayList);
        return arrayList;
    }
}
