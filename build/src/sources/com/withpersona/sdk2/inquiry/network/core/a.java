package com.withpersona.sdk2.inquiry.network.core;

import android.util.Base64;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import jr.v;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Charsets;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
import okhttp3.Headers;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.Request;
import okhttp3.RequestBody;
import okio.Buffer;
import org.jetbrains.annotations.NotNull;
import org.json.JSONArray;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {
    @NotNull

    /* renamed from: a */
    public static final a f20030a = new a();

    /* renamed from: com.withpersona.sdk2.inquiry.network.core.a$a */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0261a {
        @NotNull

        /* renamed from: a */
        public final String f20031a;
        @NotNull

        /* renamed from: b */
        public final String f20032b;
        @NotNull

        /* renamed from: c */
        public final String f20033c;
        @NotNull

        /* renamed from: d */
        public final String f20034d;

        public C0261a(@NotNull String str, @NotNull String str2, @NotNull String str3, @NotNull String str4) {
            this.f20031a = str;
            this.f20032b = str2;
            this.f20033c = str3;
            this.f20034d = str4;
        }

        @NotNull
        public final String a() {
            return this.f20033c;
        }

        @NotNull
        public final String b() {
            return this.f20031a;
        }

        @NotNull
        public final String c() {
            return this.f20034d;
        }

        @NotNull
        public final String d() {
            return this.f20032b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b<T> implements Comparator {
        /* JADX WARN: Multi-variable type inference failed */
        @Override // java.util.Comparator
        public final int compare(T t10, T t11) {
            Pair pair = (Pair) t10;
            Pair pair2 = (Pair) t11;
            return mr.a.d(CollectionsKt.x0(CollectionsKt.o(pair.c(), pair.d()), null, null, null, 0, null, null, 63, null), CollectionsKt.x0(CollectionsKt.o(pair2.c(), pair2.d()), null, null, null, 0, null, null, 63, null));
        }
    }

    public static /* synthetic */ Request a(a aVar, Request request, wo.b bVar, long j10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            j10 = System.currentTimeMillis();
        }
        return aVar.a(request, bVar, j10);
    }

    public final String b(RequestBody requestBody) {
        Buffer buffer = new Buffer();
        requestBody.writeTo(buffer);
        return StringsKt.k1(buffer.T1()).toString();
    }

    @NotNull
    public final JSONArray c(@NotNull RequestBody requestBody) {
        Pair a10;
        List<Pair<String, Object>> c10 = f20030a.c(a(requestBody));
        ArrayList arrayList = new ArrayList(CollectionsKt.w(c10, 10));
        Iterator<T> it = c10.iterator();
        while (it.hasNext()) {
            Pair pair = (Pair) it.next();
            String str = (String) pair.a();
            String obj = pair.b().toString();
            if (new Regex("^[+-]?\\d+(\\.\\d+)?$").i(obj)) {
                a10 = v.a(str, StringsKt.x1(obj, 10));
            } else {
                a10 = v.a(str, new Regex("\\s").replace(obj, ""));
            }
            arrayList.add(a10);
        }
        ArrayList arrayList2 = new ArrayList();
        for (Object obj2 : arrayList) {
            if (((String) ((Pair) obj2).b()).length() > 0) {
                arrayList2.add(obj2);
            }
        }
        LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.ranges.d.d(o0.e(CollectionsKt.w(arrayList2, 10)), 16));
        for (Object obj3 : arrayList2) {
            linkedHashMap.put((String) ((Pair) obj3).c(), obj3);
        }
        List<Pair> W0 = CollectionsKt.W0(linkedHashMap.values(), new b());
        JSONArray jSONArray = new JSONArray();
        for (Pair pair2 : W0) {
            JSONArray jSONArray2 = new JSONArray();
            jSONArray2.put((String) pair2.a());
            jSONArray2.put((String) pair2.b());
            jSONArray.put(jSONArray2);
        }
        return jSONArray;
    }

    @NotNull
    public final Request a(@NotNull Request request, @NotNull wo.b bVar, long j10) {
        C0261a a10 = a(j10, request, bVar);
        return a10 != null ? request.k().a("NHMJLNRS", a10.d()).a("STPBWSBB", a10.b()).a("DNLGNZLZ", a10.a()).a("TLJLGGDG", a10.c()).b() : request;
    }

    public final boolean b(List<String> list) {
        if (!(list instanceof Collection) || !list.isEmpty()) {
            for (String str : list) {
                if (StringsKt.P(str, "filename=", false, 2, null)) {
                    return true;
                }
            }
        }
        return false;
    }

    public final C0261a a(long j10, Request request, wo.b bVar) {
        String c10 = request.h().c("Authorization");
        RequestBody c11 = request.c();
        if (c10 == null || c11 == null) {
            return null;
        }
        try {
            String c12 = request.h().c("User-Agent");
            if (c12 != null && !StringsKt.k0(c12)) {
                Map n10 = o0.n(v.a("User-Agent", c12), v.a("VTDGJLGG", request.h().c("VTDGJLGG")), v.a("Persona-Device-Vendor-Id", request.h().c("Persona-Device-Vendor-Id")), v.a("Persona-Version", request.h().c("Persona-Version")));
                n10.put("TLJLGGDG", CollectionsKt.x0(x0.m(n10.keySet(), "TLJLGGDG"), ", ", null, null, 0, null, null, 62, null));
                Set keySet = n10.keySet();
                Collection values = n10.values();
                String str = (String) CollectionsKt.B0(StringsKt.split$default(c10, new String[]{" "}, false, 0, 6, null));
                if (str == null) {
                    bVar.f(NetworkUtilsKt.SUBSYSTEM, wo.a.f52837i, "Auth token is null.");
                    return null;
                }
                String optString = new JSONObject(new String(Base64.decode((String) StringsKt.split$default(str, new String[]{"."}, false, 0, 6, null).get(1), 0), Charsets.UTF_8)).optString("sub");
                if (optString != null && !StringsKt.k0(optString)) {
                    String valueOf = String.valueOf(j10 / 1000);
                    return new C0261a(a(CollectionsKt.x0(CollectionsKt.o(optString, valueOf, StringsKt.J(c(c11).toString(), "\\/", "/", false, 4, null)), ":", null, null, 0, null, null, 62, null)), valueOf, a(CollectionsKt.x0(CollectionsKt.o(CollectionsKt.x0(values, "", null, null, 0, null, null, 62, null), valueOf, StringsKt.J(c(c11).toString(), "\\/", "/", false, 4, null)), ":", null, null, 0, null, null, 62, null)), CollectionsKt.x0(keySet, ", ", null, null, 0, null, null, 62, null));
                }
                bVar.f(NetworkUtilsKt.SUBSYSTEM, wo.a.f52837i, "Session token is null.");
                return null;
            }
            bVar.f(NetworkUtilsKt.SUBSYSTEM, wo.a.f52837i, "User agent is null.");
            return null;
        } catch (Exception e10) {
            wo.a aVar = wo.a.f52837i;
            String message = e10.getMessage();
            bVar.f(NetworkUtilsKt.SUBSYSTEM, aVar, "An unexpected error occurred: " + message + ".");
            return null;
        }
    }

    @NotNull
    public final List<Pair<String, Object>> c(@NotNull List<? extends Pair<String, ? extends Object>> list) {
        while (true) {
            ArrayList arrayList = new ArrayList();
            LinkedHashSet linkedHashSet = new LinkedHashSet();
            LinkedHashMap linkedHashMap = new LinkedHashMap();
            boolean z10 = false;
            for (Pair<String, ? extends Object> pair : list) {
                String str = (String) pair.a();
                Object b10 = pair.b();
                List split$default = StringsKt.split$default(str, new String[]{"[]"}, false, 2, 2, null);
                if (split$default.size() == 1) {
                    arrayList.add(v.a(str, b10));
                } else {
                    String str2 = (String) split$default.get(0);
                    String str3 = (String) split$default.get(1);
                    if (linkedHashMap.get(str2) == null) {
                        linkedHashMap.put(str2, 0);
                    }
                    if (!linkedHashSet.add(str) && !StringsKt.V(str3, "[]", false, 2, null)) {
                        Object obj = linkedHashMap.get(str2);
                        if (obj != null) {
                            linkedHashMap.put(str2, Integer.valueOf(((Number) obj).intValue() + 1));
                            linkedHashSet.clear();
                            linkedHashSet.add(str);
                        } else {
                            throw new IllegalArgumentException("Required value was null.");
                        }
                    }
                    arrayList.add(v.a(str2 + "[" + linkedHashMap.get(str2) + "]" + str3, b10));
                    z10 = true;
                }
            }
            if (!z10) {
                return arrayList;
            }
            list = arrayList;
        }
    }

    public final String a(String str) {
        return kotlin.text.d.u(MessageDigest.getInstance("SHA-256").digest(str.getBytes(Charsets.UTF_8)), null, 1, null);
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r0v15, types: [org.json.JSONArray] */
    /* JADX WARN: Type inference failed for: r0v17, types: [org.json.JSONObject] */
    public final List<Pair<String, Object>> a(RequestBody requestBody) {
        List<String> l10;
        List e10;
        String c10;
        List<String> split$default;
        String str;
        MediaType contentType = requestBody.contentType();
        if (contentType == null) {
            return CollectionsKt.e(v.a("", b(requestBody)));
        }
        if (Intrinsics.areEqual(contentType.g(), "json")) {
            String b10 = b(requestBody);
            if (!Intrinsics.areEqual(b10, "{}") && !Intrinsics.areEqual(b10, "[]")) {
                if (StringsKt.P(b10, "{", false, 2, null)) {
                    str = new JSONObject(b10);
                } else if (StringsKt.P(b10, "[", false, 2, null)) {
                    str = new JSONArray(b10);
                }
                b10 = str;
            }
            if (b10 instanceof String) {
                return CollectionsKt.e(v.a("", b10));
            }
            return a((Object) b10);
        } else if (Intrinsics.areEqual(contentType.h(), "multipart")) {
            List<MultipartBody.b> b11 = ((MultipartBody) requestBody).b();
            ArrayList arrayList = new ArrayList();
            for (MultipartBody.b bVar : b11) {
                Headers b12 = bVar.b();
                if (b12 != null && (c10 = b12.c("Content-Disposition")) != null && (split$default = StringsKt.split$default(c10, new String[]{";"}, false, 0, 6, null)) != null) {
                    l10 = new ArrayList<>(CollectionsKt.w(split$default, 10));
                    for (String str2 : split$default) {
                        l10.add(StringsKt.k1(str2).toString());
                    }
                } else {
                    l10 = CollectionsKt.l();
                }
                a aVar = f20030a;
                String a10 = aVar.a(l10);
                if (a10 != null) {
                    if (aVar.b(l10)) {
                        e10 = CollectionsKt.e(v.a(a10, Long.valueOf(bVar.a().contentLength())));
                    } else {
                        List<Pair<String, Object>> a11 = aVar.a(bVar.a());
                        if (a11.isEmpty()) {
                            e10 = CollectionsKt.l();
                        } else if (a11.size() == 1) {
                            e10 = CollectionsKt.e(v.a(a10, a11.get(0).d()));
                        } else {
                            throw new IllegalArgumentException("Request body parts must contain a single value. Instead got: " + a11 + ". Part name: " + a10);
                        }
                    }
                    CollectionsKt.B(arrayList, e10);
                } else {
                    throw new IllegalArgumentException("Request body parts must have names.");
                }
            }
            return CollectionsKt.h1(arrayList);
        } else if (Intrinsics.areEqual(contentType.h(), "image")) {
            return CollectionsKt.e(v.a("", Long.valueOf(requestBody.contentLength())));
        } else {
            throw new RuntimeException("Unsupported type: " + contentType);
        }
    }

    public final List<Pair<String, Object>> a(Object obj) {
        ArrayList arrayList = new ArrayList();
        a(this, obj, (String) null, arrayList, 2, (Object) null);
        return arrayList;
    }

    public static /* synthetic */ void a(a aVar, Object obj, String str, List list, int i10, Object obj2) {
        if ((i10 & 2) != 0) {
            str = null;
        }
        aVar.a(obj, str, list);
    }

    public final void a(Object obj, String str, List<Pair<String, Object>> list) {
        if (obj instanceof JSONObject) {
            JSONObject jSONObject = (JSONObject) obj;
            Iterator<String> keys = jSONObject.keys();
            while (keys.hasNext()) {
                String next = keys.next();
                a aVar = f20030a;
                Object opt = jSONObject.opt(next);
                if (str != null) {
                    next = str + "[" + next + "]";
                }
                aVar.a(opt, next, list);
            }
        } else if (!(obj instanceof JSONArray)) {
            if (str == null) {
                str = "";
            }
            list.add(v.a(str, obj));
        } else {
            JSONArray jSONArray = (JSONArray) obj;
            int length = jSONArray.length();
            for (int i10 = 0; i10 < length; i10++) {
                a(jSONArray.opt(i10), str == null ? "[" + i10 + "]" : str + "[" + i10 + "]", list);
            }
        }
    }

    public final String a(List<String> list) {
        Object obj;
        Iterator<T> it = list.iterator();
        while (true) {
            if (!it.hasNext()) {
                obj = null;
                break;
            }
            obj = it.next();
            if (StringsKt.P((String) obj, "name=", false, 2, null)) {
                break;
            }
        }
        String str = (String) obj;
        if (str != null) {
            return str.substring(6, str.length() - 1);
        }
        return null;
    }
}
