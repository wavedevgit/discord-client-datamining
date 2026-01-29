package com.appsflyer.internal;

import android.content.Context;
import com.appsflyer.AFLogger;
import com.appsflyer.internal.AFc1cSDK;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nExceptionManageCacheImpl.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ExceptionManageCacheImpl.kt\ncom/appsflyer/internal/components/monitorsdk/exmanager/ExceptionManageCacheImpl\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 4 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,130:1\n11653#2,9:131\n13579#2:140\n11653#2,9:141\n13579#2:150\n13580#2:152\n11662#2:153\n13580#2:155\n11662#2:156\n4117#2:158\n4217#2,2:159\n4117#2:165\n4217#2,2:166\n1#3:151\n1#3:154\n1#3:157\n1549#4:161\n1620#4,3:162\n1549#4:168\n1620#4,3:169\n*S KotlinDebug\n*F\n+ 1 ExceptionManageCacheImpl.kt\ncom/appsflyer/internal/components/monitorsdk/exmanager/ExceptionManageCacheImpl\n*L\n69#1:131,9\n69#1:140\n71#1:141,9\n71#1:150\n71#1:152\n71#1:153\n69#1:155\n69#1:156\n101#1:158\n101#1:159,2\n119#1:165\n119#1:166,2\n71#1:151\n69#1:154\n101#1:161\n101#1:162,3\n120#1:168\n120#1:169,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFd1uSDK implements AFd1zSDK {
    @NotNull
    private final AFc1gSDK getCurrencyIso4217Code;

    public AFd1uSDK(@NotNull AFc1gSDK aFc1gSDK) {
        Intrinsics.checkNotNullParameter(aFc1gSDK, "");
        this.getCurrencyIso4217Code = aFc1gSDK;
    }

    private final File getMonetizationNetwork() {
        Context context = this.getCurrencyIso4217Code.getRevenue;
        if (context != null) {
            File file = new File(context.getFilesDir(), "AFExceptionsCache");
            if (!file.exists()) {
                file.mkdirs();
            }
            return file;
        }
        return null;
    }

    @Override // com.appsflyer.internal.AFd1zSDK
    public final int AFAdRevenueData() {
        int i10 = 0;
        for (AFc1cSDK aFc1cSDK : getMediationNetwork()) {
            i10 += aFc1cSDK.getCurrencyIso4217Code;
        }
        return i10;
    }

    @Override // com.appsflyer.internal.AFd1zSDK
    public final boolean getCurrencyIso4217Code() {
        return getCurrencyIso4217Code(new String[0]);
    }

    @Override // com.appsflyer.internal.AFd1zSDK
    @NotNull
    public final List<AFc1cSDK> getMediationNetwork() {
        List<AFc1cSDK> list;
        File[] listFiles;
        ArrayList arrayList;
        synchronized (this) {
            try {
                File monetizationNetwork = getMonetizationNetwork();
                list = null;
                if (monetizationNetwork != null && (listFiles = monetizationNetwork.listFiles()) != null) {
                    ArrayList arrayList2 = new ArrayList();
                    for (File file : listFiles) {
                        File[] listFiles2 = file.listFiles();
                        if (listFiles2 != null) {
                            Intrinsics.checkNotNullExpressionValue(listFiles2, "");
                            arrayList = new ArrayList();
                            for (File file2 : listFiles2) {
                                AFc1cSDK.AFa1vSDK aFa1vSDK = AFc1cSDK.AFa1vSDK;
                                Intrinsics.checkNotNullExpressionValue(file2, "");
                                AFc1cSDK currencyIso4217Code = AFc1cSDK.AFa1vSDK.getCurrencyIso4217Code(tr.j.j(file2, null, 1, null));
                                if (currencyIso4217Code != null) {
                                    arrayList.add(currencyIso4217Code);
                                }
                            }
                        } else {
                            arrayList = null;
                        }
                        if (arrayList != null) {
                            arrayList2.add(arrayList);
                        }
                    }
                    list = CollectionsKt.y(arrayList2);
                }
                if (list == null) {
                    list = CollectionsKt.l();
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return list;
    }

    @Override // com.appsflyer.internal.AFd1zSDK
    public final String getRevenue(@NotNull Throwable th2, @NotNull String str) {
        String str2;
        File file;
        Intrinsics.checkNotNullParameter(th2, "");
        Intrinsics.checkNotNullParameter(str, "");
        synchronized (this) {
            File monetizationNetwork = getMonetizationNetwork();
            str2 = null;
            if (monetizationNetwork != null) {
                file = new File(monetizationNetwork, "6.17.3");
                if (!file.exists()) {
                    file.mkdirs();
                }
            } else {
                file = null;
            }
            if (file != null) {
                try {
                    AFc1cSDK AFAdRevenueData = AFd1pSDK.AFAdRevenueData(th2, str);
                    String str3 = AFAdRevenueData.getRevenue;
                    File file2 = new File(file, str3);
                    if (file2.exists()) {
                        AFc1cSDK.AFa1vSDK aFa1vSDK = AFc1cSDK.AFa1vSDK;
                        AFc1cSDK currencyIso4217Code = AFc1cSDK.AFa1vSDK.getCurrencyIso4217Code(tr.j.j(file2, null, 1, null));
                        if (currencyIso4217Code != null) {
                            currencyIso4217Code.getCurrencyIso4217Code++;
                            AFAdRevenueData = currencyIso4217Code;
                        }
                    }
                    tr.j.l(file2, AFAdRevenueData.getMediationNetwork(), null, 2, null);
                    str2 = str3;
                } catch (Exception e10) {
                    AFh1ySDK.v$default(AFLogger.INSTANCE, AFg1cSDK.EXCEPTION_MANAGER, "Could not cache exception\n " + e10.getMessage(), false, 4, null);
                }
            }
        }
        return str2;
    }

    @Override // com.appsflyer.internal.AFd1zSDK
    public final boolean getCurrencyIso4217Code(@NotNull String... strArr) {
        boolean z10;
        Intrinsics.checkNotNullParameter(strArr, "");
        synchronized (this) {
            try {
                File monetizationNetwork = getMonetizationNetwork();
                z10 = true;
                if (monetizationNetwork != null) {
                    if (strArr.length == 0) {
                        AFh1ySDK.v$default(AFLogger.INSTANCE, AFg1cSDK.EXCEPTION_MANAGER, "delete all exceptions", false, 4, null);
                        z10 = tr.j.r(monetizationNetwork);
                    } else {
                        AFh1ySDK.v$default(AFLogger.INSTANCE, AFg1cSDK.EXCEPTION_MANAGER, "delete all exceptions except for: " + kotlin.collections.i.v0(strArr, ", ", null, null, 0, null, null, 62, null), false, 4, null);
                        File[] listFiles = monetizationNetwork.listFiles();
                        if (listFiles != null) {
                            Intrinsics.checkNotNullExpressionValue(listFiles, "");
                            ArrayList<File> arrayList = new ArrayList();
                            for (File file : listFiles) {
                                if (!kotlin.collections.i.N(strArr, file.getName())) {
                                    arrayList.add(file);
                                }
                            }
                            ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
                            for (File file2 : arrayList) {
                                Intrinsics.checkNotNullExpressionValue(file2, "");
                                arrayList2.add(Boolean.valueOf(tr.j.r(file2)));
                            }
                            Set l12 = CollectionsKt.l1(arrayList2);
                            if (l12.isEmpty()) {
                                l12 = x0.c(Boolean.TRUE);
                            }
                            Set set = l12;
                            if (set.size() != 1 || !((Boolean) CollectionsKt.n0(set)).booleanValue()) {
                                z10 = false;
                            }
                        }
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return z10;
    }

    @Override // com.appsflyer.internal.AFd1zSDK
    public final void getMediationNetwork(int i10, int i11) {
        File[] listFiles;
        synchronized (this) {
            try {
                File monetizationNetwork = getMonetizationNetwork();
                if (monetizationNetwork != null && (listFiles = monetizationNetwork.listFiles()) != null) {
                    Intrinsics.checkNotNullExpressionValue(listFiles, "");
                    ArrayList<File> arrayList = new ArrayList();
                    for (File file : listFiles) {
                        String name = file.getName();
                        Intrinsics.checkNotNullExpressionValue(name, "");
                        int mediationNetwork = AFk1zSDK.getMediationNetwork(name);
                        if (i10 > mediationNetwork || mediationNetwork > i11) {
                            arrayList.add(file);
                        }
                    }
                    ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
                    for (File file2 : arrayList) {
                        Intrinsics.checkNotNullExpressionValue(file2, "");
                        arrayList2.add(Boolean.valueOf(tr.j.r(file2)));
                    }
                }
                Unit unit = Unit.f33282a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
