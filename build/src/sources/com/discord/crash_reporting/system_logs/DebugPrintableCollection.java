package com.discord.crash_reporting.system_logs;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import com.discord.crash_reporting.system_logs.HistoricalProcessExitReason;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\t\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010%\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u0000 \u001c2\u00020\u0001:\u0002\u001b\u001cB\u0007¢\u0006\u0004\b\u0002\u0010\u0003J \u0010\u000b\u001a\u00060\u0005j\u0002`\u00062\u0006\u0010\f\u001a\u00020\r2\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u000fH\u0002J\u001a\u0010\u0010\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00132\n\u0010\u0014\u001a\u00060\u0015j\u0002`\u0016J\b\u0010\u0017\u001a\u00020\u0011H\u0002J\u0018\u0010\u0018\u001a\u00020\u00112\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0019\u001a\u00020\u001aH\u0002R\u0012\u0010\u0004\u001a\u00060\u0005j\u0002`\u0006X\u0082\u000e¢\u0006\u0002\n\u0000R\u001e\u0010\u0007\u001a\u0012\u0012\b\u0012\u00060\u0005j\u0002`\u0006\u0012\u0004\u0012\u00020\t0\bX\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0001X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001d"}, d2 = {"Lcom/discord/crash_reporting/system_logs/DebugPrintableCollection;", "", "<init>", "()V", "idCounter", "", "Lcom/discord/crash_reporting/system_logs/DebugPrintableId;", "collection", "", "Lcom/discord/crash_reporting/system_logs/DebugPrintableCollection$DebugPrintableRef;", BaseJavaModule.METHOD_TYPE_SYNC, "add", "ref", "Lcom/discord/crash_reporting/system_logs/DebugPrintable;", "tag", "", "debugPrint", "", "context", "Landroid/content/Context;", "sb", "Ljava/lang/StringBuilder;", "Lkotlin/text/StringBuilder;", "removeDeadReferencesLocked", "addSystemEntry", "dp", "Lcom/discord/crash_reporting/system_logs/DebugPrintBuilder;", "DebugPrintableRef", "Companion", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class DebugPrintableCollection {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int MAX_DEBUG_PRINTABLE_STRING_LENGTH = 524288;
    private long idCounter = 1;
    @NotNull
    private final Map<Long, DebugPrintableRef> collection = new LinkedHashMap();
    @NotNull
    private final Object sync = new Object();

    @Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0006\u001a\u00020\u00072\u0006\u0010\b\u001a\u00020\tR\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\n"}, d2 = {"Lcom/discord/crash_reporting/system_logs/DebugPrintableCollection$Companion;", "", "<init>", "()V", "MAX_DEBUG_PRINTABLE_STRING_LENGTH", "", "libdiscordVersion", "", "context", "Landroid/content/Context;", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final String libdiscordVersion(@NotNull Context context) {
            ApplicationInfo applicationInfo;
            String string;
            Intrinsics.checkNotNullParameter(context, "context");
            if (Build.VERSION.SDK_INT >= 33) {
                applicationInfo = context.getPackageManager().getApplicationInfo(context.getPackageName(), PackageManager.ApplicationInfoFlags.of(128L));
            } else {
                applicationInfo = context.getPackageManager().getApplicationInfo(context.getPackageName(), IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            }
            Bundle bundle = applicationInfo.metaData;
            if (bundle != null && (string = bundle.getString("libdiscord_version")) != null) {
                return string;
            }
            return "Unknown libdiscord version";
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0082\b\u0018\u00002\u00020\u0001B\u001f\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¢\u0006\u0004\b\u0007\u0010\bJ\u000b\u0010\r\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000f\u0010\u000e\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005HÆ\u0003J%\u0010\u000f\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\u000e\b\u0002\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005HÆ\u0001J\u0013\u0010\u0010\u001a\u00020\u00112\b\u0010\u0012\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0013\u001a\u00020\u0014HÖ\u0001J\t\u0010\u0015\u001a\u00020\u0003HÖ\u0001R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0017\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\f¨\u0006\u0016"}, d2 = {"Lcom/discord/crash_reporting/system_logs/DebugPrintableCollection$DebugPrintableRef;", "", "tag", "", "reference", "Ljava/lang/ref/WeakReference;", "Lcom/discord/crash_reporting/system_logs/DebugPrintable;", "<init>", "(Ljava/lang/String;Ljava/lang/ref/WeakReference;)V", "getTag", "()Ljava/lang/String;", "getReference", "()Ljava/lang/ref/WeakReference;", "component1", "component2", "copy", "equals", "", "other", "hashCode", "", "toString", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class DebugPrintableRef {
        @NotNull
        private final WeakReference<DebugPrintable> reference;
        private final String tag;

        public DebugPrintableRef(String str, @NotNull WeakReference<DebugPrintable> reference) {
            Intrinsics.checkNotNullParameter(reference, "reference");
            this.tag = str;
            this.reference = reference;
        }

        /* JADX WARN: Multi-variable type inference failed */
        public static /* synthetic */ DebugPrintableRef copy$default(DebugPrintableRef debugPrintableRef, String str, WeakReference weakReference, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = debugPrintableRef.tag;
            }
            if ((i10 & 2) != 0) {
                weakReference = debugPrintableRef.reference;
            }
            return debugPrintableRef.copy(str, weakReference);
        }

        public final String component1() {
            return this.tag;
        }

        @NotNull
        public final WeakReference<DebugPrintable> component2() {
            return this.reference;
        }

        @NotNull
        public final DebugPrintableRef copy(String str, @NotNull WeakReference<DebugPrintable> reference) {
            Intrinsics.checkNotNullParameter(reference, "reference");
            return new DebugPrintableRef(str, reference);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof DebugPrintableRef) {
                DebugPrintableRef debugPrintableRef = (DebugPrintableRef) obj;
                return Intrinsics.areEqual(this.tag, debugPrintableRef.tag) && Intrinsics.areEqual(this.reference, debugPrintableRef.reference);
            }
            return false;
        }

        @NotNull
        public final WeakReference<DebugPrintable> getReference() {
            return this.reference;
        }

        public final String getTag() {
            return this.tag;
        }

        public int hashCode() {
            String str = this.tag;
            return ((str == null ? 0 : str.hashCode()) * 31) + this.reference.hashCode();
        }

        @NotNull
        public String toString() {
            String str = this.tag;
            WeakReference<DebugPrintable> weakReference = this.reference;
            return "DebugPrintableRef(tag=" + str + ", reference=" + weakReference + ")";
        }
    }

    private final long add(DebugPrintable debugPrintable, String str) {
        long j10;
        synchronized (this.sync) {
            try {
                j10 = this.idCounter;
                this.idCounter = j10 + 1;
                long j11 = 0;
                while (this.collection.containsKey(Long.valueOf(j10))) {
                    j10 = this.idCounter;
                    this.idCounter = j10 + 1;
                    j11++;
                    if (j11 < 0) {
                        break;
                    }
                }
                this.collection.put(Long.valueOf(j10), new DebugPrintableRef(str, new WeakReference(debugPrintable)));
                removeDeadReferencesLocked();
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return j10;
    }

    static /* synthetic */ long add$default(DebugPrintableCollection debugPrintableCollection, DebugPrintable debugPrintable, String str, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str = null;
        }
        return debugPrintableCollection.add(debugPrintable, str);
    }

    private final void addSystemEntry(Context context, DebugPrintBuilder debugPrintBuilder) {
        debugPrintBuilder.appendLine("System:");
        debugPrintBuilder.appendKeyValue("libdiscordVersion", Companion.libdiscordVersion(context));
        debugPrintBuilder.appendKeyValue("SDK_INT", Integer.valueOf(Build.VERSION.SDK_INT));
        HistoricalProcessExitReason.Reason lastReason = HistoricalProcessExitReason.INSTANCE.lastReason(context);
        if (lastReason != null) {
            debugPrintBuilder.appendKeyValue("exit_reason", lastReason.getReason());
            String description = lastReason.getDescription();
            if (description != null) {
                debugPrintBuilder.appendKeyValue("exit_description", description);
            }
        }
        DebugPrintBuilder.appendLine$default(debugPrintBuilder, null, 1, null);
    }

    private final void removeDeadReferencesLocked() {
        ArrayList<Number> arrayList = new ArrayList();
        for (Map.Entry<Long, DebugPrintableRef> entry : this.collection.entrySet()) {
            long longValue = entry.getKey().longValue();
            if (entry.getValue().getReference().get() == null) {
                arrayList.add(Long.valueOf(longValue));
            }
        }
        for (Number number : arrayList) {
            this.collection.remove(Long.valueOf(number.longValue()));
        }
    }

    public final void debugPrint(@NotNull Context context, @NotNull StringBuilder sb2) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(sb2, "sb");
        DebugPrintBuilder debugPrintBuilder = new DebugPrintBuilder(sb2);
        synchronized (this.sync) {
            try {
                addSystemEntry(context, debugPrintBuilder);
                Iterator<Map.Entry<Long, DebugPrintableRef>> it = this.collection.entrySet().iterator();
                while (true) {
                    if (!it.hasNext()) {
                        break;
                    }
                    Map.Entry<Long, DebugPrintableRef> next = it.next();
                    long longValue = next.getKey().longValue();
                    DebugPrintableRef value = next.getValue();
                    DebugPrintable debugPrintable = value.getReference().get();
                    if (debugPrintable != null) {
                        sb2.append(longValue);
                        if (value.getTag() != null) {
                            sb2.append(' ');
                            sb2.append(value.getTag());
                        }
                        sb2.append(":");
                        sb2.append('\n');
                        try {
                            debugPrintable.debugPrint(debugPrintBuilder);
                        } catch (Exception e10) {
                            sb2.append("Exception: " + e10);
                        }
                        sb2.append('\n');
                        if (sb2.length() > MAX_DEBUG_PRINTABLE_STRING_LENGTH) {
                            sb2.delete(MAX_DEBUG_PRINTABLE_STRING_LENGTH, sb2.length() - 1);
                            sb2.append(" {truncated}");
                            break;
                        }
                    }
                }
                Unit unit = Unit.f33298a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }
}
