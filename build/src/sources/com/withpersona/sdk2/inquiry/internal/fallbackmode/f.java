package com.withpersona.sdk2.inquiry.internal.fallbackmode;

import android.content.Context;
import com.squareup.moshi.a0;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.i;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import kotlin.Result;
import kotlin.collections.CollectionsKt;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Charsets;
import okhttp3.RequestBody;
import org.json.JSONArray;
import org.json.JSONObject;
import ov.z;
import zr.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements wo.a {

    /* renamed from: a  reason: collision with root package name */
    private final w f18904a;

    /* renamed from: b  reason: collision with root package name */
    private final Context f18905b;

    /* renamed from: c  reason: collision with root package name */
    private final i.a f18906c;

    /* renamed from: d  reason: collision with root package name */
    private final int f18907d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        f b(int i10);
    }

    public f(w moshi, Context context, i.a staticTemplateSessionFactory, int i10) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(staticTemplateSessionFactory, "staticTemplateSessionFactory");
        this.f18904a = moshi;
        this.f18905b = context;
        this.f18906c = staticTemplateSessionFactory;
        this.f18907d = i10;
    }

    @Override // wo.a
    public Object a(String str, RequestBody requestBody, Continuation continuation) {
        z i10 = z.i(null);
        Intrinsics.checkNotNullExpressionValue(i10, "success(...)");
        return i10;
    }

    @Override // wo.a
    public Object b(String str, RequestBody requestBody, Continuation continuation) {
        z i10 = z.i(null);
        Intrinsics.checkNotNullExpressionValue(i10, "success(...)");
        return i10;
    }

    @Override // wo.a
    public Object c(yo.d dVar, Continuation continuation) {
        String jSONArray;
        try {
            InputStream openRawResource = this.f18905b.getResources().openRawResource(this.f18907d);
            Intrinsics.checkNotNullExpressionValue(openRawResource, "openRawResource(...)");
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(openRawResource, Charsets.UTF_8), 8192);
            String h10 = r.h(bufferedReader);
            ArrayList arrayList = null;
            zr.c.a(bufferedReader, null);
            JSONArray optJSONArray = new JSONObject(h10).optJSONArray("steps");
            if (optJSONArray != null && (jSONArray = optJSONArray.toString()) != null) {
                List list = (List) this.f18904a.d(a0.j(List.class, NextStep.class)).fromJson(jSONArray);
                if (list != null) {
                    List<NextStep> list2 = list;
                    arrayList = new ArrayList(CollectionsKt.w(list2, 10));
                    for (NextStep nextStep : list2) {
                        arrayList.add(nextStep);
                    }
                }
                if (arrayList != null && !arrayList.isEmpty()) {
                    Result.a aVar = Result.f31985e;
                    i.a aVar2 = this.f18906c;
                    String uuid = UUID.randomUUID().toString();
                    Intrinsics.checkNotNullExpressionValue(uuid, "toString(...)");
                    return Result.b(aVar2.a(arrayList, uuid));
                }
                Result.a aVar3 = Result.f31985e;
                return Result.b(kotlin.c.a(new wo.b("Expected steps to contain at least one step")));
            }
            Result.a aVar4 = Result.f31985e;
            return Result.b(kotlin.c.a(new wo.b("Failed to open resource as static template")));
        } catch (Exception unused) {
            Result.a aVar5 = Result.f31985e;
            return Result.b(kotlin.c.a(new wo.b("Failed to open resource as static template. Resource not found.")));
        }
    }
}
