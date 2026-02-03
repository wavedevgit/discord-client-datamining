package com.discord.bundle_updater;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.serialization.json.Json;
import lr.v;
import lu.x;
import okio.BufferedSource;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\u0018\u0002\n\u0002\b\u0005\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007J2\u0010\b\u001a\u0014\u0012\u0010\u0012\u000e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\f0\n0\t2\u0006\u0010\r\u001a\u00020\u00052\b\u0010\u000e\u001a\u0004\u0018\u00010\u00052\u0006\u0010\u000f\u001a\u00020\u0005J\u000e\u0010\u0010\u001a\u00020\u000b2\u0006\u0010\u0006\u001a\u00020\u0007¨\u0006\u0011"}, d2 = {"Lcom/discord/bundle_updater/BundleUpdaterUtils;", "", "<init>", "()V", "getManifestFromFile", "Lcom/discord/bundle_updater/AppManifest;", "file", "Ljava/io/File;", "compareJSONData", "", "Lkotlin/Pair;", "", "Lcom/discord/bundle_updater/AssetStatus;", "apkManifest", "oldManifest", "newManifest", "md5", "bundle_updater_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nBundleUpdaterUtils.kt\nKotlin\n*S Kotlin\n*F\n+ 1 BundleUpdaterUtils.kt\ncom/discord/bundle_updater/BundleUpdaterUtils\n+ 2 Json.kt\nkotlinx/serialization/json/Json\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,81:1\n147#2:82\n1617#3,9:83\n1869#3:92\n1870#3:94\n1626#3:95\n1#4:93\n*S KotlinDebug\n*F\n+ 1 BundleUpdaterUtils.kt\ncom/discord/bundle_updater/BundleUpdaterUtils\n*L\n52#1:82\n58#1:83,9\n58#1:92\n58#1:94\n58#1:95\n58#1:93\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BundleUpdaterUtils {
    @NotNull
    public static final BundleUpdaterUtils INSTANCE = new BundleUpdaterUtils();

    private BundleUpdaterUtils() {
    }

    @NotNull
    public final List<Pair<String, AssetStatus>> compareJSONData(@NotNull AppManifest apkManifest, AppManifest appManifest, @NotNull AppManifest newManifest) {
        AssetStatus assetStatus;
        Pair a10;
        Intrinsics.checkNotNullParameter(apkManifest, "apkManifest");
        Intrinsics.checkNotNullParameter(newManifest, "newManifest");
        ArrayList arrayList = new ArrayList();
        for (String str : newManifest.getHashes().keySet()) {
            String str2 = newManifest.getHashes().get(str);
            if (Intrinsics.areEqual(str2, apkManifest.getHashes().get(str))) {
                a10 = null;
            } else {
                if (appManifest != null && Intrinsics.areEqual(str2, appManifest.getHashes().get(str))) {
                    assetStatus = AssetStatus.CopyFromPrevious;
                } else {
                    assetStatus = AssetStatus.Download;
                }
                a10 = v.a(str, assetStatus);
            }
            if (a10 != null) {
                arrayList.add(a10);
            }
        }
        return CollectionsKt.h1(arrayList);
    }

    @NotNull
    public final AppManifest getManifestFromFile(@NotNull File file) {
        Intrinsics.checkNotNullParameter(file, "file");
        Json json = BundleUpdaterUtilsKt.getJson();
        String j10 = wr.j.j(file, null, 1, null);
        json.a();
        return (AppManifest) json.b(AppManifest.Companion.serializer(), j10);
    }

    @NotNull
    public final String md5(@NotNull File file) {
        Intrinsics.checkNotNullParameter(file, "file");
        BufferedSource d10 = x.d(x.j(file));
        try {
            lu.n a10 = lu.n.f37333o.a(x.b());
            d10.e2(a10);
            String q10 = a10.a().q();
            wr.c.a(d10, null);
            return q10;
        } finally {
        }
    }
}
