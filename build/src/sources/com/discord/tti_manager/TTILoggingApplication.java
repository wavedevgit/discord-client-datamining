package com.discord.tti_manager;

import android.app.Application;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.MutablePropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.properties.ReadWriteProperty;
import kotlin.reflect.KProperty;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0003\b&\u0018\u0000 \u00072\u00020\u0001:\u0001\u0007B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\u0004\u001a\u00020\u0005H\u0016J\b\u0010\u0006\u001a\u00020\u0005H&¨\u0006\b"}, d2 = {"Lcom/discord/tti_manager/TTILoggingApplication;", "Landroid/app/Application;", "<init>", "()V", "onCreate", "", "initialize", "Companion", "tti_manager_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class TTILoggingApplication extends Application {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final ReadWriteProperty applicationInitializeTimestamp$delegate;
    @NotNull
    private static final ReadWriteProperty applicationOpenedTimestampExcludingActivityLaunchGap$delegate;
    @NotNull
    private static final ReadWriteProperty applicationStartedTimestamp$delegate;

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\t\n\u0002\b\u0012\n\u0002\u0010\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\r\u0010\u0015\u001a\u00020\u0005H\u0000¢\u0006\u0002\b\u0016J\u0006\u0010\u0017\u001a\u00020\u0018R+\u0010\u0006\u001a\u00020\u00052\u0006\u0010\u0004\u001a\u00020\u00058B@BX\u0082\u008e\u0002¢\u0006\u0012\n\u0004\b\u000b\u0010\f\u001a\u0004\b\u0007\u0010\b\"\u0004\b\t\u0010\nR+\u0010\r\u001a\u00020\u00052\u0006\u0010\u0004\u001a\u00020\u00058F@BX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\b\u0010\u0010\f\u001a\u0004\b\u000e\u0010\b\"\u0004\b\u000f\u0010\nR+\u0010\u0011\u001a\u00020\u00052\u0006\u0010\u0004\u001a\u00020\u00058B@BX\u0082\u008e\u0002¢\u0006\u0012\n\u0004\b\u0014\u0010\f\u001a\u0004\b\u0012\u0010\b\"\u0004\b\u0013\u0010\n¨\u0006\u0019"}, d2 = {"Lcom/discord/tti_manager/TTILoggingApplication$Companion;", "", "<init>", "()V", "<set-?>", "", "applicationOpenedTimestampExcludingActivityLaunchGap", "getApplicationOpenedTimestampExcludingActivityLaunchGap", "()J", "setApplicationOpenedTimestampExcludingActivityLaunchGap", "(J)V", "applicationOpenedTimestampExcludingActivityLaunchGap$delegate", "Lkotlin/properties/ReadWriteProperty;", "applicationStartedTimestamp", "getApplicationStartedTimestamp", "setApplicationStartedTimestamp", "applicationStartedTimestamp$delegate", "applicationInitializeTimestamp", "getApplicationInitializeTimestamp", "setApplicationInitializeTimestamp", "applicationInitializeTimestamp$delegate", "getAppOpenedTimestamp", "getAppOpenedTimestamp$tti_manager_release", "trackActivityDelegateInitialized", "", "tti_manager_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        static final /* synthetic */ KProperty[] $$delegatedProperties = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(Companion.class, "applicationOpenedTimestampExcludingActivityLaunchGap", "getApplicationOpenedTimestampExcludingActivityLaunchGap()J", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(Companion.class, "applicationStartedTimestamp", "getApplicationStartedTimestamp()J", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(Companion.class, "applicationInitializeTimestamp", "getApplicationInitializeTimestamp()J", 0))};

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final long getApplicationInitializeTimestamp() {
            return ((Number) TTILoggingApplication.applicationInitializeTimestamp$delegate.getValue(this, $$delegatedProperties[2])).longValue();
        }

        private final long getApplicationOpenedTimestampExcludingActivityLaunchGap() {
            return ((Number) TTILoggingApplication.applicationOpenedTimestampExcludingActivityLaunchGap$delegate.getValue(this, $$delegatedProperties[0])).longValue();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void setApplicationInitializeTimestamp(long j10) {
            TTILoggingApplication.applicationInitializeTimestamp$delegate.setValue(this, $$delegatedProperties[2], Long.valueOf(j10));
        }

        private final void setApplicationOpenedTimestampExcludingActivityLaunchGap(long j10) {
            TTILoggingApplication.applicationOpenedTimestampExcludingActivityLaunchGap$delegate.setValue(this, $$delegatedProperties[0], Long.valueOf(j10));
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void setApplicationStartedTimestamp(long j10) {
            TTILoggingApplication.applicationStartedTimestamp$delegate.setValue(this, $$delegatedProperties[1], Long.valueOf(j10));
        }

        public final long getAppOpenedTimestamp$tti_manager_release() {
            return getApplicationOpenedTimestampExcludingActivityLaunchGap();
        }

        public final long getApplicationStartedTimestamp() {
            return ((Number) TTILoggingApplication.applicationStartedTimestamp$delegate.getValue(this, $$delegatedProperties[1])).longValue();
        }

        public final void trackActivityDelegateInitialized() {
            setApplicationOpenedTimestampExcludingActivityLaunchGap(System.currentTimeMillis() - (getApplicationInitializeTimestamp() - getApplicationStartedTimestamp()));
        }

        private Companion() {
        }
    }

    static {
        kotlin.properties.a aVar = kotlin.properties.a.f32095a;
        applicationOpenedTimestampExcludingActivityLaunchGap$delegate = aVar.a();
        applicationStartedTimestamp$delegate = aVar.a();
        applicationInitializeTimestamp$delegate = aVar.a();
    }

    public TTILoggingApplication() {
        Companion.setApplicationStartedTimestamp(System.currentTimeMillis());
    }

    public abstract void initialize();

    @Override // android.app.Application
    public void onCreate() {
        super.onCreate();
        initialize();
        Companion.setApplicationInitializeTimestamp(System.currentTimeMillis());
    }
}
