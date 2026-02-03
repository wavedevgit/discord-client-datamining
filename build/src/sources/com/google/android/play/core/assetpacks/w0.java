package com.google.android.play.core.assetpacks;

import android.content.Intent;
import android.os.Bundle;
import androidx.work.b;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class w0 implements y0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f15680a;

    /* renamed from: b  reason: collision with root package name */
    private final Bundle f15681b;

    /* renamed from: c  reason: collision with root package name */
    private final b.a f15682c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ w0(String str, Bundle bundle, b.a aVar, sh.b bVar) {
        this.f15680a = str;
        this.f15681b = bundle;
        this.f15682c = aVar;
    }

    @Override // com.google.android.play.core.assetpacks.y0
    public final void a(String str) {
        String string = this.f15681b.getString(str);
        if (string == null) {
            return;
        }
        this.f15682c.h(this.f15680a.concat(str), string);
    }

    @Override // com.google.android.play.core.assetpacks.y0
    public final /* synthetic */ void b(String str) {
        x0.a(this, str);
    }

    @Override // com.google.android.play.core.assetpacks.y0
    public final void c(String str) {
        String str2;
        ArrayList parcelableArrayList = this.f15681b.getParcelableArrayList(str);
        if (parcelableArrayList == null) {
            return;
        }
        String[] strArr = new String[parcelableArrayList.size()];
        for (int i10 = 0; i10 < parcelableArrayList.size(); i10++) {
            Intent intent = (Intent) parcelableArrayList.get(i10);
            if (intent != null && intent.getData() != null) {
                str2 = intent.getData().toString();
            } else {
                str2 = "";
            }
            strArr[i10] = str2;
        }
        b.a aVar = this.f15682c;
        String str3 = this.f15680a;
        aVar.i(str3 + str + ":intent_data", strArr);
    }

    @Override // com.google.android.play.core.assetpacks.y0
    public final void d(String str, long j10) {
        Bundle bundle = this.f15681b;
        this.f15682c.g(this.f15680a.concat(str), bundle.getLong(str, j10));
    }

    @Override // com.google.android.play.core.assetpacks.y0
    public final void e(String str) {
        Bundle bundle = this.f15681b;
        this.f15682c.f(this.f15680a.concat(str), bundle.getInt(str));
    }

    @Override // com.google.android.play.core.assetpacks.y0
    public final void f(String str) {
        Bundle bundle = this.f15681b;
        this.f15682c.e(this.f15680a.concat("notification_intent_reconstruct_from_data"), bundle.getBoolean("notification_intent_reconstruct_from_data"));
    }

    @Override // com.google.android.play.core.assetpacks.y0
    public final List g(String str) {
        ArrayList<String> stringArrayList = this.f15681b.getStringArrayList(str);
        if (stringArrayList == null) {
            return new ArrayList();
        }
        String[] strArr = new String[stringArrayList.size()];
        for (int i10 = 0; i10 < stringArrayList.size(); i10++) {
            String str2 = stringArrayList.get(i10);
            if (str2 == null) {
                str2 = "";
            }
            strArr[i10] = str2;
        }
        this.f15682c.i(this.f15680a.concat(str), strArr);
        return stringArrayList;
    }
}
